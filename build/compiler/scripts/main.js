"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var fs = require("fs");
var path = require("path");
var extractPackageNames_1 = require("./extract/extractPackageNames");
var extractImportStatements_1 = require("./extract/extractImportStatements");
var extractComponentNames_1 = require("./extract/extractComponentNames");
var findFirstJsxOpeningLikeElementWithName_1 = require("./extract/findFirstJsxOpeningLikeElementWithName");
var generateReactComponent_1 = require("./transform/generateReactComponent");
var transformImportStatements_1 = require("./transform/transformImportStatements");
var transformDataItems_1 = require("./transform/transformDataItems");
var extractData_1 = require("./extract/extractData");
var installPackages_1 = require("./install/installPackages");
var rootDir = path.resolve(process.cwd(), '../');
var srcPath = path.join(rootDir, 'src');
var buildPathAppDir = path.join(rootDir, 'build/app');
// Global Set to keep track of installed packages
var installedPackages = new Set();
function processFile(filePath) {
    var fileName = path.basename(filePath, path.extname(filePath));
    var sourceCode = fs.readFileSync(filePath, "utf-8");
    var sourceFile = ts.createSourceFile("input.tsx", sourceCode, ts.ScriptTarget.Latest, true);
    //extracting and transforming 
    var packageNames = (0, extractPackageNames_1.extractPackageNames)(sourceFile);
    var importStatement = (0, extractImportStatements_1.extractImportStatements)(sourceFile);
    var dataItems = (0, extractData_1.extractData)(sourceFile);
    var componentNames = (0, extractComponentNames_1.extractComponentNames)(importStatement);
    var transformedImports = (0, transformImportStatements_1.transformImportStatements)(importStatement);
    var transformedDataImports = (0, transformDataItems_1.transformDataItems)(dataItems, fileName);
    //generating component
    var componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    var jsxElements = (0, findFirstJsxOpeningLikeElementWithName_1.findFirstJsxOpeningLikeElementWithName)(sourceFile, componentNames)
        .map(function (element) { return element.getText(); })
        .join("\n");
    var componentCode = (0, generateReactComponent_1.generateReactComponent)(transformedImports, transformedDataImports, componentName, jsxElements);
    //installing npm packages used
    (0, installPackages_1.installPackages)(buildPathAppDir, packageNames, installedPackages);
    //getAllExports('navbar-cms');
    // Creating files
    var outputDirPath = buildPathAppDir;
    if (fileName !== "main") {
        outputDirPath = path.join(outputDirPath, fileName);
    }
    if (!fs.existsSync(outputDirPath)) {
        fs.mkdirSync(outputDirPath, { recursive: true });
    }
    var outputFilePath = path.join(outputDirPath, "page.tsx");
    fs.writeFileSync(outputFilePath, componentCode);
    console.log("Generated file: ".concat(outputFilePath));
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
function walkDirectory(dirPath) {
    var files = fs.readdirSync(dirPath);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var filePath = path.join(dirPath, file);
        var stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            walkDirectory(filePath);
        }
        else if (stats.isFile() && path.extname(file).toLowerCase() === ".agml") {
            processFile(filePath);
        }
    }
}
walkDirectory(srcPath);
