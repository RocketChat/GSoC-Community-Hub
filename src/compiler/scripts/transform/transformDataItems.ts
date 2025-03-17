
export function transformDataItems(dataItems: string[], fileName: string): string {
    const sourcePath = `../../build/${fileName}`;
    return `import { ${dataItems.join(', ')} } from '${sourcePath}';`;
}