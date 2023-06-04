/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				sm: "425px",
				md: "768px",
				lg: "976px",
				lf: "1200px",
				xl: "1440px",
				"2xl": "1600px",
				"3xl": "1920px",
				"4xl": "2520px",
			},
			colors: {
				blue: "#6F4FF2",
				"light-blue": "#6C7AA0",
				red: "#DC3546",
				green: "#50BB25",
				gray: "#68676E",
				modeDark: "#131129",
				dark: "#1D1932",
				light: "#F2F2F2",
			},
		},
	},
	plugins: [],
};
