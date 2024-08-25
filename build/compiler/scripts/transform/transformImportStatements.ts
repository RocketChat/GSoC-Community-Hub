export function transformImportStatements(importStatements: { [module: string]: string[] }): string[] {
    return Object.entries(importStatements).map(([module, items]) => {
        return `import { ${items.join(', ')} } from '${module}';`;
    });
}