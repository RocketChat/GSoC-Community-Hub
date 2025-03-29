import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				secondaryColor: '#F5455C'
			}
		}
	},

	plugins: []
} satisfies Config;
