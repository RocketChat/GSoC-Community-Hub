import fs from "fs";
import path from "path";
import * as ts from "typescript";
import { extractPackageNames } from "./extract/extractPackageNames.js";
import { installPackages } from "./install/installPackages.js";

const AGML_DIR = path.resolve("../src");
const PROJECT_ROOT = path.resolve(".");
const FETCHER_FILE = path.join(PROJECT_ROOT, "src/lib/util/main.ts");

/**
 * Recursively find all `.agml` files in a directory.
 */
function getAllAgmlFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap(entry => {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllAgmlFiles(res);
    if (entry.isFile() && res.endsWith(".agml")) return [res];
    return [];
  });
}

/**
 * Parse AGML files and extract dependency names.
 */
function getDependencies(): string[] {
  const dependencies = new Set<string>();
  const allFiles = getAllAgmlFiles(AGML_DIR);

  allFiles.forEach(file => {
    const content = fs.readFileSync(file, "utf-8");
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
  const fileData = fs.readFileSync(FETCHER_FILE, "utf-8");
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
  let content = "";

  if (fs.existsSync(FETCHER_FILE)) {
    content = fs.readFileSync(FETCHER_FILE, "utf-8");
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
  let newImports = "";
  let newCalls = "";

  newPackages.forEach(pkg => {
    const alias = pkg.replace(/[^a-zA-Z0-9_]/g, "_");
    newImports += `import { fetchDataFunction as fetchData_${alias} } from "${pkg}";\n`;
    newCalls += `    await fetchData_${alias}();\n`;
  });

  //  Insert new imports just before async function main()
  const asyncMainIndex = content.indexOf("async function main()");
  if (asyncMainIndex !== -1) {
    content =
      content.slice(0, asyncMainIndex) +
      "\n" +
      newImports +
      content.slice(asyncMainIndex);
  } else {
    content = newImports + "\n" + content;
  }

  //  Insert fetch calls inside main(), before its closing brace
  const mainEndIndex = content.lastIndexOf("}");
  if (mainEndIndex !== -1) {
    content =
      content.slice(0, mainEndIndex) +
      "\n" +
      newCalls +
      content.slice(mainEndIndex);
  } else {
    // fallback if async function not found
    content += "\n" + newCalls;
  }

  fs.mkdirSync(path.dirname(FETCHER_FILE), { recursive: true });
  fs.writeFileSync(FETCHER_FILE, content, "utf-8");
  console.log(`Updated ${FETCHER_FILE} with new packages:`, newPackages);
}


/**
 * Main pre-build logic.
 */
function preBuild() {
  console.log("Starting pre-build step...");

  const deps = getDependencies();
  if (deps.length === 0) {
    console.log("No package dependencies found in .agml files. Exiting pre-build.");
    return;
  }

  const existingImports = getExistingImports();
  const newPackages = deps.filter(pkg => !existingImports.includes(pkg));

  if (newPackages.length === 0) {
    console.log("No new packages to add. main.ts is up to date.");
    return;
  }

  const installedPackages = new Set(existingImports);
  installPackages(PROJECT_ROOT, newPackages, installedPackages);

  updateFetcherFile(newPackages);
}

preBuild();
