import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		hmr: {
			timeout: 120000
		},
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['..']
		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
