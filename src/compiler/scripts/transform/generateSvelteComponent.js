"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSvelteComponent = generateSvelteComponent;
function generateSvelteComponent(importStatement, dataImports, componentName, jsxElements) {
    var imports = importStatement.join('\n');
    var data = dataImports;
    return "\n<script module>\n</script>\n\n<script lang=\"ts\">\n  ".concat(data, "\n  ").concat(imports, "\n</script>\n\n").concat(jsxElements, "\n");
}
