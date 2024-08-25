import * as ts from "typescript";

// export function extractImportStatements(sourceFile: ts.SourceFile): string[] {
//     const importStatements: string[] = [];
//     ts.forEachChild(sourceFile, (node) => {
//         if (ts.isImportDeclaration(node) || ts.isImportEqualsDeclaration(node)) {
//             importStatements.push(node.getText(sourceFile));
//         }
//     });
//     return importStatements;
//   }


export function extractImportStatements(sourceFile: ts.SourceFile): Record<string, string[]> {
    const importsMap: Record<string, string[]> = {};

    function visit(node: ts.Node) {
        if (ts.isSourceFile(node)) {
            const text = node.getText();
            const lines = text.split('\n');
            for (const line of lines) {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('use ')) {
                    const parts = trimmedLine.split(' ');
                    if (parts.length === 4 && parts[2] === 'from') {
                        const componentName = parts[1];
                        const packageName = parts[3]; // No need to remove quotes

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
