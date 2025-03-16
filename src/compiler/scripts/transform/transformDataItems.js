"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataItems = transformDataItems;
function transformDataItems(dataItems, fileName) {
    //const sourcePath = `src/${fileName}`;
    return "let { ".concat(dataItems.join(', '), " } = $props();");
}
