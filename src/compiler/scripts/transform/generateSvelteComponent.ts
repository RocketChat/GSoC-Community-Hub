export function generateSvelteComponent(importStatement: string[],dataImports: string, componentName: string, jsxElements: string): string {
  const imports = importStatement.join('\n');
  const data = dataImports;
  return `<script lang="ts">
  ${data}
  ${imports}
</script>

${jsxElements}
`;
}