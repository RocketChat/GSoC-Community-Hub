import * as ts from "typescript";

export function extractPackageNames(sourceFile: ts.SourceFile): string[] {
    const packageNames: string[] = [];
  
    function visit(node: ts.Node) {
      if (ts.isSourceFile(node)) {
        const text = node.getText();
        const lines = text.split('\n');
        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('i ')) {
            const parts = trimmedLine.split(' ');
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