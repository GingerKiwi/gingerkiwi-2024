/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			fontFamily: {
			  'roboto-flex': ['"Roboto Flex"', 'sans'],
			  'display-font': ['"Trocchi"', 'serif'],
			  'test-font': ['"Pacifico"', 'serif'],
			},
			// font-family: 'Roboto Flex', sans-serif;
			// font-family: 'Trocchi', serif;
			// font-roboto-flex
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		// ...
	  ],
}
