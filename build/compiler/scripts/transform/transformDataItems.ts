export function transformDataItems(dataItems: string[], fileName: string): string[] {
    const sourcePath = `src/${fileName}`;
    return dataItems.map(item => `import { ${item} } from '${sourcePath}';`);
}