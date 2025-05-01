import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    base: "/",
    define: {
    "process.env": {},
    },

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
