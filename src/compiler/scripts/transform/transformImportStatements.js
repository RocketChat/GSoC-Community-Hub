"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformImportStatements = transformImportStatements;
var path = require("path");
function transformImportStatements(importStatements) {
    return Object.entries(importStatements).map(function (_a) {
        var module = _a[0], items = _a[1];
        if (path.extname(module).toLowerCase() == ".svelte") {
            return "import ".concat(items, " from '").concat(module, "';");
        }
        return "import { ".concat(items.join(', '), " } from '").concat(module, "';");
    });
}
