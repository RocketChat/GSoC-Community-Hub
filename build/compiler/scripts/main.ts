import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import { extractPackageNames } from "./extract/extractPackageNames";
import { extractImportStatements } from "./extract/extractImportStatements";
import { extractComponentNames } from "./extract/extractComponentNames";
import { findFirstJsxOpeningLikeElementWithName } from "./extract/findFirstJsxOpeningLikeElementWithName";
import { generateReactComponent } from "./transform/generateReactComponent";
import { transformImportStatements } from "./transform/transformImportStatements";
import { transformDataItems } from "./transform/transformDataItems";
import { extractData } from "./extract/extractData";
import { installPackages } from "./install/installPackages";


const rootDir = path.resolve(process.cwd(), '../');
const srcPath = path.join(rootDir, 'src');
const buildPathAppDir = path.join(rootDir, 'build/app');

// Global Set to keep track of installed packages
const installedPackages = new Set<string>();

function processFile(filePath: string): void {
  const fileName = path.basename(filePath, path.extname(filePath));
  const sourceCode = fs.readFileSync(filePath, "utf-8");
  const sourceFile = ts.createSourceFile("input.tsx", sourceCode, ts.ScriptTarget.Latest, true);

  //extracting and transforming 
  const packageNames = extractPackageNames(sourceFile);
  const importStatement = extractImportStatements(sourceFile);
  const dataItems = extractData(sourceFile);
  const componentNames = extractComponentNames(importStatement);
  const transformedImports = transformImportStatements(importStatement);
  const transformedDataImports = transformDataItems(dataItems, fileName);
  
  //generating component
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  const jsxElements = findFirstJsxOpeningLikeElementWithName(sourceFile, componentNames)
  .map((element) => element.getText())
  .join("\n");
  const componentCode = generateReactComponent(transformedImports,transformedDataImports, componentName, jsxElements);
  
  //installing npm packages used
  installPackages(buildPathAppDir, packageNames, installedPackages);

  //getAllExports('navbar-cms');

  // Creating files
  let outputDirPath = buildPathAppDir;
  if (fileName !== "main") {
    outputDirPath = path.join(outputDirPath, fileName);
  }

  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath, { recursive: true });
  }
  
  const outputFilePath = path.join(outputDirPath, "page.tsx");
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
    } else if (stats.isFile() && path.extname(file).toLowerCase() === ".agml") {
      processFile(filePath);
    }
  }
}

walkDirectory(srcPath);

