"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDataItems = void 0;
function transformDataItems(dataItems, fileName) {
    var sourcePath = "src/".concat(fileName);
    return dataItems.map(function (item) { return "import { ".concat(item, " } from '").concat(sourcePath, "';"); });
}
exports.transformDataItems = transformDataItems;
