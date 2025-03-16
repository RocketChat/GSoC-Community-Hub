export function transformDataItems(dataItems: string[], fileName: string): string {
    //const sourcePath = `src/${fileName}`;
    return `let { ${dataItems.join(', ')} } = $props();`;
}