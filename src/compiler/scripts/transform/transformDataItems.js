"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataItems = transformDataItems;
function transformDataItems(dataItems, fileName) {
    var sourcePath = fileName == "main" ? "../build" : "../../build";
    return dataItems.map(function (item) { return " import { ".concat(item, " } from \"").concat(sourcePath, "/").concat(item, "\";"); }).join("\n");
    //return `import { ${dataItems.join(', ')} } from '${sourcePath}';`;
}
