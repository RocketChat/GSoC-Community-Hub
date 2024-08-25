"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReactComponent = void 0;
function generateReactComponent(importStatement, dataImports, componentName, jsxElements) {
    var imports = importStatement.join('\n');
    var data = dataImports.join('\n');
    return "import React from 'react';\n".concat(imports, "\n").concat(data, "\n\nexport default function ").concat(componentName, "() {\n  return (\n    <>\n").concat(jsxElements, "\n    </>\n  );\n};\n");
}
exports.generateReactComponent = generateReactComponent;
