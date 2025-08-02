/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // or 'media'
	content: [
		"./src/**/*.{js,ts,jsx,tsx}", // All files in src
		"./src/app/**/*.{js,ts,jsx,tsx}", // App Router files
	],
	theme: {
		extend: {
			colors: {
				primary: "#0f5694",
				secondary: "#F5F5F5",
				accent:"#d91f34"
			},
			fontFamily: {
				'english': ['var(--font-inter)', 'Inter', 'sans-serif'],
				'arabic': ['var(--font-tajawal)', 'Tajawal', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
