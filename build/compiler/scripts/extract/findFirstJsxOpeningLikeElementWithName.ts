import * as ts from "typescript";

function isJsxOpeningLike(node: ts.Node): node is ts.JsxOpeningElement {
    return node.kind === ts.SyntaxKind.JsxOpeningElement || node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}

export function findFirstJsxOpeningLikeElementWithName(node: ts.SourceFile, tagNames: string[]): ts.JsxOpeningElement[] {
    const elements: ts.JsxOpeningElement[] = [];
    console.log("@@@@@@@@",tagNames)
    function find(node: ts.Node | undefined): void {
        if (!node) {
            return;
        }
        
        // Check if node is a JSX opening element
        if (isJsxOpeningLike(node)) {
            const tagName = (node as ts.JsxOpeningElement).tagName;
            if (tagName.kind === ts.SyntaxKind.Identifier) {
                const identifier = tagName as ts.Identifier;
                if (tagNames.includes(identifier.text)) {
                    elements.push(node as ts.JsxOpeningElement);
                }
            }
        }
        
        ts.forEachChild(node, find);
    }
    
    find(node);
    
    return elements;
}
