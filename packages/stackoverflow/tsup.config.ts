import { readFile, writeFile } from "fs/promises";
import { defineConfig } from "tsup";
import type { Options } from "tsup";

const client = [
  "./src/StackOverflowComponent.tsx",
];

const server = [
  "./src/functions.tsx",
  "./src/DemoComponent.tsx"
];

export default defineConfig((opts) => {
  const common = {
    clean: true,
    dts: true,
    format: ["esm"],
    minify: true,
    outDir: "dist",
    external: ["react", "react-dom", "next", "react/jsx-runtime"],
  } satisfies Options;

  return [
    {
      ...common,
      entry: ["./src/index.tsx", ...server],
    },
    {
      ...common,
      entry: client,
      async onSuccess() {
        const pkgJson = JSON.parse(
          await readFile("./package.json", {
            encoding: "utf-8",
          }),
        ) as PackageJson;
        pkgJson.exports = {
          "./package.json": "./package.json",
          ".": {
            import: "./dist/index.mjs",
            types: "./dist/index.d.mts",
          },
        };
        [...client, ...server]
          .filter((e) => e.endsWith(".tsx"))
          .forEach((entry) => {
            const file = entry.replace("./src/", "").replace(".tsx", "");
            pkgJson.exports["./" + file] = {
              import: "./dist/" + file + ".mjs",
              types: "./dist/" + file + ".d.mts",
            };
            pkgJson.typesVersions["*"][file] = ["dist/" + file + ".d.mts"];
          });

        await writeFile("./package.json", JSON.stringify(pkgJson, null, 2));
      },
    },
  ];
});

type PackageJson = {
  name: string;
  exports: Record<string, { import: string; types: string } | string>;
  typesVersions: Record<"*", Record<string, string[]>>;
  files: string[];
  dependencies: Record<string, string>;
  pnpm: {
    overrides: Record<string, string>;
  };
};