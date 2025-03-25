"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPackageNames = void 0;
var ts = require("typescript");
function extractPackageNames(sourceFile) {
    var packageNames = [];
    function visit(node) {
        if (ts.isSourceFile(node)) {
            var text = node.getText();
            var lines = text.split('\n');
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                var trimmedLine = line.trim();
                if (trimmedLine.startsWith('i ')) {
                    var parts = trimmedLine.split(' ');
                    if (parts.length >= 2) {
                        packageNames.push(parts[1]);
                    }
                }
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return packageNames;
}
exports.extractPackageNames = extractPackageNames;
