import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: false,
  minify: true,
  external: ["react", "next-auth", "faunadb"],
  ...options,
}));
