import { defineConfig, Options } from "tsup";
export default defineConfig((options: Options) => ({
  clean: true,
  treeshake: true,
  splitting: true,
  entry: ["src/index.tsx", "src/server.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  ...options,
}));
