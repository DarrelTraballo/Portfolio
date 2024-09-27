/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#111827',
				'secondary-bg': '#1f2937',

				'primary-font': '#ffffff',
				'secondary-font': '#9ca3af',
				'tertiary-font': '#6b7280',

				'link-color': '#60a5fa',
			},
		},
	},
	plugins: [],
}
