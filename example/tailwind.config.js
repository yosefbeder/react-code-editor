const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
		},
	},
	variants: {
		extend: {
			display: ['hover'],
		},
	},
	plugins: [],
};
