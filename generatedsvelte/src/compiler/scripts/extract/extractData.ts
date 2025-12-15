import * as ts from 'typescript';
import * as fs from 'fs';

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

export function extractSourcePath(buildPath: string, fileName: string, dataItems: string[]): Record<string, string> {
	const sourcePath: Record<string, string> = {};
	const trimmedFiles: string[] = [];
	const files = fs.readdirSync(buildPath);
	//check if fetched at build time, if not, assume it is statically defined.
	files.forEach((file) => {
		trimmedFiles.push(file.split('.')[0].trim());
	});
	dataItems.forEach((item) => {
		if (trimmedFiles.includes(item.trim())) {
			sourcePath[item.trim()] = '../../../build';
		} else if(fileName === 'main') {
			sourcePath[item] = '../../../src';
		}else{
			sourcePath[item] = '../../../../src';
		}
	});
	return sourcePath;
}
