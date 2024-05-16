import { Config } from "tailwindcss/types/config";

export default {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	plugins: [],
	theme: {
		extend: {
			backgroundImage: {
				"icon-gradient": "linear-gradient(45deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .2))",
				"wallpaper-gradient": "linear-gradient(to right, rgba(24,37,77,0.5), rgba(24,37,77,0.8))",
			},
			colors: {
				"dark-blue": "rgb(24, 37, 77)",
			},
			fontFamily: {
				"cursive": ["cursive"],
			},
		},
	},
} as Config;
