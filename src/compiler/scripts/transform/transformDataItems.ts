
export function transformDataItems(dataItems: string[], fileName: string): string {
    const sourcePath = fileName == "main" ? `../build` : "../../build";
    return dataItems.map(item => ` import { ${item} } from "${sourcePath}/${item}";`).join("\n");
    //return `import { ${dataItems.join(', ')} } from '${sourcePath}';`;
}