/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				travelBgImg: "url('/src/assets/images/background.jpg')",
			},
		},
	},
	plugins: [require('daisyui')],
};
