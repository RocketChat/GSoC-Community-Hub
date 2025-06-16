import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
    plugins: [sveltekit()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});

