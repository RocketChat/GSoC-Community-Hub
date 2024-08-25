"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractData = void 0;
var ts = require("typescript");
function extractData(sourceFile) {
    var dataItems = [];
    function visit(node) {
        if (ts.isSourceFile(node)) {
            var text = node.getText();
            var lines = text.split('\n');
            for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                var line = lines_1[_i];
                var trimmedLine = line.trim();
                if (trimmedLine.startsWith('get ')) {
                    var parts = trimmedLine.split(' ');
                    if (parts.length === 2) {
                        dataItems.push(parts[1]);
                    }
                }
            }
        }
        ts.forEachChild(node, visit);
    }
    visit(sourceFile);
    return dataItems;
}
exports.extractData = extractData;
