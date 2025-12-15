import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import { extractPackageNames } from "./extract/extractPackageNames";
import { extractImportStatements } from './extract/extractImportStatements';
import { extractComponentNames } from './extract/extractComponentNames';
import { findFirstJsxOpeningLikeElementWithName } from './extract/findFirstJsxOpeningLikeElementWithName';
import { generateSvelteComponent } from './transform/generateSvelteComponent';
import { transformImportStatements } from './transform/transformImportStatements';
import { transformDataItems } from './transform/transformDataItems';
import { extractData, extractSourcePath } from './extract/extractData';
import { installPackages } from "./install/installPackages";

const rootDir = path.resolve(process.cwd(), '../');
const projectRoot = path.resolve(".");
const srcPath = path.join(rootDir, 'src');
const buildPathAppDir = path.join(rootDir, 'generatedsvelte/src/routes');
const FETCHER_FILE = path.join(rootDir, 'generatedsvelte/src/lib/util/main.ts');

// Global Set to keep track of installed packages
const installedPackages = new Set<string>();

/**
 * Recursively find all `.agml` files in a directory.
 */
function getAllAgmlFiles(dir: string): string[] {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	return entries.flatMap(entry => {
		const res = path.join(dir, entry.name);
		if (entry.isDirectory()) return getAllAgmlFiles(res);
		if (entry.isFile() && res.endsWith('.agml')) return [res];
		return [];
	});
}

/**
 * Parse AGML files and extract dependency names.
 */
function getDependencies(): string[] {
	const dependencies = new Set<string>();
	const allFiles = getAllAgmlFiles(srcPath);

	allFiles.forEach(file => {
		const content = fs.readFileSync(file, 'utf-8');
		const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
		const deps = extractPackageNames(sourceFile);
		deps.forEach(dep => dependencies.add(dep));
	});

	return Array.from(dependencies);
}

/**
 * Read existing main.ts and detect which packages are already imported.
 */
function getExistingImports(): string[] {
	if (!fs.existsSync(FETCHER_FILE)) return [];
	const fileData = fs.readFileSync(FETCHER_FILE, 'utf-8');
	const regex = /from\s+["']([^"']+)["']/g;
	const existing: string[] = [];
	let match;
	while ((match = regex.exec(fileData)) !== null) existing.push(match[1]);
	return existing;
}

/**
 * Update main.ts to include async fetchDataFunction imports + calls.
 */
function updateFetcherFile(newPackages: string[]) {
	let content = '';

	if (fs.existsSync(FETCHER_FILE)) {
		content = fs.readFileSync(FETCHER_FILE, 'utf-8');
		if(content == ""){
			content = `import { fetchStats } from './countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
// import {fetchRcStats} from "./countRcStats"
import { fetchEventData } from './fetchEventData';
import { fetchDiscordStats } from './countDiscordStats';

// Auto-generated imports below

async function main(){
    // fetchRcStats();
    // fetchStats();
    // fetchContributors();
    // fetchLastUpdated();
    // fetchEventData();

    // Auto-generated fetch calls below
}

main();
`;
		}
	} else {
		// If main.ts doesn't exist, create base structure
		content = `import { fetchStats } from './countStats';
import { fetchContributors, fetchLastUpdated } from './fetchContributors';
// import {fetchRcStats} from "./countRcStats"
import { fetchEventData } from './fetchEventData';
import { fetchDiscordStats } from './countDiscordStats';

// Auto-generated imports below

async function main(){
    // fetchRcStats();
    // fetchStats();
    // fetchContributors();
    // fetchLastUpdated();
    // fetchEventData();

    // Auto-generated fetch calls below
}

main();
`;
	}

	// Prepare new imports + calls
	let newImports = '';
	let newCalls = '';

	newPackages.forEach(pkg => {
		const alias = pkg.replace(/[^a-zA-Z0-9_]/g, '_');
		newImports += `import { fetchDataFunction as fetchData_${alias} } from "${pkg}";\n`;
		newCalls += `    await fetchData_${alias}();\n`;
	});

	// Insert new imports just before async function main()
	const asyncMainIndex = content.indexOf('async function main()');
	if (asyncMainIndex !== -1) {
		content =
			content.slice(0, asyncMainIndex) +
			'\n' +
			newImports +
			content.slice(asyncMainIndex);
	} else {
		content = newImports + '\n' + content;
	}

	// Insert fetch calls inside main(), before its closing brace
	const mainEndIndex = content.lastIndexOf('}');
	if (mainEndIndex !== -1) {
		content =
			content.slice(0, mainEndIndex) +
			'\n' +
			newCalls +
			content.slice(mainEndIndex);
	} else {
		// fallback if async function not found
		content += '\n' + newCalls;
	}

	fs.mkdirSync(path.dirname(FETCHER_FILE), { recursive: true });
	fs.writeFileSync(FETCHER_FILE, content, 'utf-8');
	console.log(`Updated ${FETCHER_FILE} with new packages:`, newPackages);
}

/**
 * Pre-build logic: install packages and update fetcher file.
 */
function runPreBuildStep() {
	console.log('Starting pre-build step...');

	const deps = getDependencies();
	if (deps.length === 0) {
		console.log('No package dependencies found in .agml files.');
		return;
	}

	const existingImports = getExistingImports();
	const newPackages = deps.filter(pkg => !existingImports.includes(pkg));

	if (newPackages.length === 0) {
		console.log('No new packages to add. main.ts is up to date.');
		return;
	}

	// Populate installedPackages with existing imports
	existingImports.forEach(pkg => installedPackages.add(pkg));

	// Install new packages
	installPackages(projectRoot, newPackages, installedPackages);

	// Update fetcher file
	updateFetcherFile(newPackages);

	console.log('Pre-build step completed.');
}


function processFile(filePath: string): void {
	const fileName = path.basename(filePath, path.extname(filePath));
	const sourceCode = fs.readFileSync(filePath, 'utf-8');
	const sourceFile = ts.createSourceFile('input.tsx', sourceCode, ts.ScriptTarget.Latest, true);
	const buildPath = path.join(rootDir, 'build');

	//extracting and transforming
	//const packageNames = extractPackageNames(sourceFile);
	const importStatement = extractImportStatements(sourceFile);
	const dataItems = extractData(sourceFile);
	const sourcePath = extractSourcePath(buildPath, fileName, dataItems);
	const componentNames = extractComponentNames(importStatement);
	const transformedImports = transformImportStatements(importStatement);
	const transformedDataImports = transformDataItems(dataItems, sourcePath);

	//generating component
	const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
	const jsxElements = findFirstJsxOpeningLikeElementWithName(sourceFile, componentNames)
		.map((element) => element.getText())
		.join('\n');
	const componentCode = generateSvelteComponent(
		transformedImports,
		transformedDataImports,
		componentName,
		jsxElements
	);

	//installing npm packages used
	// installPackages(buildPathAppDir, packageNames, installedPackages);///////

	// Creating files
	let outputDirPath = buildPathAppDir;
	if (fileName !== 'main') {
		outputDirPath = path.join(outputDirPath, fileName);
	}
	if (!fs.existsSync(outputDirPath)) {
		fs.mkdirSync(outputDirPath, { recursive: true });
	}

	const outputFilePath = path.join(outputDirPath, `+page.svelte`);
	fs.writeFileSync(outputFilePath, componentCode);
	console.log(`Generated file: ${outputFilePath}`);
}

// async function getAllExports(packageName) {
//   try {
//     const esm = require('esm');
//     const m = esm(module);
//     const pkg = await m("/home/anjy/Projects/new/build/node_modules/navbar-cms/dist/index.js");
//     const exports = Object.keys(pkg);
//     console.log(`Exports from ${packageName}:`, exports);
//     return exports;
//   } catch (error) {
//     console.error(`Error importing ${packageName}:`, error);
//     return [];
//   }
// }

function walkDirectory(dirPath: string): void {
	const files = fs.readdirSync(dirPath);
	for (const file of files) {
		const filePath = path.join(dirPath, file);
		const stats = fs.statSync(filePath);
		if (stats.isDirectory()) {
			walkDirectory(filePath);
		} else if (stats.isFile() && path.extname(file).toLowerCase() === '.agml') {
			processFile(filePath);
		}
	}
}
console.log('Starting build process...');
runPreBuildStep();
walkDirectory(srcPath);
console.log('Build process completed.');