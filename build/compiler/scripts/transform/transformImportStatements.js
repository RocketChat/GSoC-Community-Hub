"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformImportStatements = void 0;
function transformImportStatements(importStatements) {
    return Object.entries(importStatements).map(function (_a) {
        var module = _a[0], items = _a[1];
        return "import { ".concat(items.join(', '), " } from '").concat(module, "';");
    });
}
exports.transformImportStatements = transformImportStatements;
