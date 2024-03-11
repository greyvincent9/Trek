/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./App.{js,jsx,ts,tsx}",
		"./screens/**/*.{js,jsx,ts,tsx}",
		"./<custom directory>/**/*.{js,jsx,ts,tsx}",
	],
	fontFamily: {
		serif: ["Playfair Display", "serif"],
	},
	theme: {
		extend: {},
	},
	plugins: [],
};
