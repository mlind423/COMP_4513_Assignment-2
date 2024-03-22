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
}

