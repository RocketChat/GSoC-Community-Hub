import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  entry: ["./app/timeline/timelineAPI.ts"],
  format: ["esm"],
  minify: true,
  target: "ES6",
  ...options,
}));
