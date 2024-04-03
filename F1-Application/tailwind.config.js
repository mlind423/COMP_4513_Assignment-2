/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/routes/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#38bdf8",
          secondary: "#0c4a6e",
          accent: "#bae6fd",
          "accent-content": "black"
        },
      },
    ],
  },
}

