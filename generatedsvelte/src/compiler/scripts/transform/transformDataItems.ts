export function transformDataItems(dataItems: string[], sourcePath: Record<string,string>): string {
	return dataItems
		.map((item) => ` import { ${item} } from "${sourcePath[item]}/${item}";`)
		.join('\n');
	//return `import { ${dataItems.join(', ')} } from '${sourcePath}';`;
}
