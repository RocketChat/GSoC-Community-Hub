"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractImportStatements = void 0;
var ts = require("typescript");
// export function extractImportStatements(sourceFile: ts.SourceFile): string[] {
//     const importStatements: string[] = [];
//     ts.forEachChild(sourceFile, (node) => {
//         if (ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node)) {
//             importStatements.push(node.getText(sourceFile));
//         }
//     });
//     return importStatements;
//   }
function extractImportStatements(sourceFile) {
    var importsMap = {};
    function visit(node) {
        if (ts.isSourceFile(node)) {
            var text = node.getText();
            var lines = text.split('\n');
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                var trimmedLine = line.trim();
                if (trimmedLine.startsWith('use ')) {
                    var parts = trimmedLine.split(' ');
                    if (parts.length === 4 && parts[2] === 'from') {
                        var componentName = parts[1];
                        var packageName = parts[3]; // No need to remove quotes
                        if (!importsMap[packageName]) {
                            importsMap[packageName] = [];
                        }
                        importsMap[packageName].push(componentName);
                    }
                }
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return importsMap;
}
exports.extractImportStatements = extractImportStatements;
