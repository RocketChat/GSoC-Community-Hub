"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFirstJsxOpeningLikeElementWithName = void 0;
var ts = require("typescript");
function isJsxOpeningLike(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningElement || node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
function findFirstJsxOpeningLikeElementWithName(node, tagNames) {
    var elements = [];
    console.log("@@@@@@@@", tagNames);
    function find(node) {
        if (!node) {
            return;
        }
        // Check if node is a JSX opening element
        if (isJsxOpeningLike(node)) {
            var tagName = node.tagName;
            if (tagName.kind === ts.SyntaxKind.Identifier) {
                var identifier = tagName;
                if (tagNames.includes(identifier.text)) {
                    elements.push(node);
                }
            }
        }
        ts.forEachChild(node, find);
    }
    find(node);
    return elements;
}
exports.findFirstJsxOpeningLikeElementWithName = findFirstJsxOpeningLikeElementWithName;
