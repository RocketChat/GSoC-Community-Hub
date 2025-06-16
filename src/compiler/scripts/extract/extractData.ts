import * as ts from "typescript";

export function extractData(sourceFile: ts.SourceFile): string[] {
    const dataItems: string[] = [];
  
    function visit(node: ts.Node) {
      if (ts.isSourceFile(node)) {
        const text = node.getText();
        const lines = text.split('\n');
        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('get ')) {
            const parts = trimmedLine.split(' ');
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