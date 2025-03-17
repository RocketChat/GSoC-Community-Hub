import * as path from "path";

export function transformImportStatements(importStatements: { [module: string]: string[] }): string[] {
    return Object.entries(importStatements).map(([module, items]) => {
        if (path.extname(module).toLowerCase() == ".svelte"){
            return `import ${items} from '${module}';`;
        }
        return `import { ${items.join(', ')} } from '${module}';`;
    });
}