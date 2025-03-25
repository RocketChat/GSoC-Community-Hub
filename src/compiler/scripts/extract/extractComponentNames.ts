type ImportsMap = Record<string, string[]>;

export function extractComponentNames(importsMap: ImportsMap): string[] {
  const componentNames: string[] = [];

  for (const packageName in importsMap) {
    if (importsMap.hasOwnProperty(packageName)) {
      const components = importsMap[packageName];
      componentNames.push(...components);  // Spread the components array and add to the result array
    }
  }

  return componentNames;
}
