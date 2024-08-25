export function generateReactComponent(importStatement: string[],dataImports: string[], componentName: string, jsxElements: string): string {
  const imports = importStatement.join('\n');
  const data = dataImports.join('\n');
  return `import React from 'react';
${imports}
${data}

export default function ${componentName}() {
  return (
    <>
${jsxElements}
    </>
  );
};
`;
}