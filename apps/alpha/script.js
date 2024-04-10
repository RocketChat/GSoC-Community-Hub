import ts from "typescript";
import { readFileSync } from 'fs';
import fs from 'fs';
import { join, resolve } from 'path';

function isJsxOpeningLike(node){
  return node.kind === ts.SyntaxKind.JsxOpeningElement || node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}

function walkDirectory(dir) {
  const files = [];
  const directories = [];

  fs.readdirSync(dir).forEach((file) => {
    const filePath = join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      directories.push(filePath);
    } else if (stats.isFile()) {
      files.push(filePath);
    }
  });

  directories.forEach((directory) => {
    files.push(...walkDirectory(directory));
  });

  return files;
}

function findFirstJsxOpeningLikeElementWithName(node, tagName) {
  return find(node);

  function find(node){
    if (!node) {
      return undefined;
    }

    // Is this a JsxElement with an identifier name?
    if (isJsxOpeningLike(node) && node.tagName.kind === ts.SyntaxKind.Identifier) {
      // Does the tag name match what we're looking for?
      if ((node.tagName).text === tagName) {
        return node;
      }
    }

    return ts.forEachChild(node, find);
  }
}

// const files = fs.readdirSync("./app")
const files = walkDirectory("./app");

files.forEach((file) => {
  const filePath = join("", file);
  const fileContents = readFileSync(filePath, 'utf-8');
  const sourceFile = ts.createSourceFile("file.ts", fileContents, ts.ScriptTarget.ES2015, /*setParentNodes*/ true, ts.ScriptKind.TSX);

  const element = findFirstJsxOpeningLikeElementWithName(sourceFile, "Navbar");

  if (element) {
    console.log(`------------\nFile: ${file}`);
    console.log(element.getText());
  } else {
    // console.log(`No Navbar element found in file: ${file}`);
  }
});