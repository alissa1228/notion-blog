/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neo': '9px 6px 0px rgb(0,0,0)', 
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}