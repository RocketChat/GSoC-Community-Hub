"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataItems = transformDataItems;
function transformDataItems(dataItems, fileName) {
    var sourcePath = "../../build/".concat(fileName);
    return "import { ".concat(dataItems.join(', '), " } from '").concat(sourcePath, "';");
}
