import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
				// xs: "475px",
			},
			colors: {
				primary: {
					"100": "#FFE8F0",
					"500": "#2a3f6b",
					DEFAULT: "#2C4B9C",

				},
				blue:"#2C4B9C",
				red: "#C80000",
				secondary: "#ED1C24",
				gray: "#EDEDED",
				gray2: "#CDCDCD",

				black: {
					"100": "#333333",
					"200": "#141413",
					"300": "#7D8087",
					"400" : "#5C5955",
					"500" : "#292219",
					DEFAULT: "#000000",
				},
				white: {
					"100": "#F7F7F7",
					DEFAULT: "#FFFFFF",
				},
			},
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
} satisfies Config;
