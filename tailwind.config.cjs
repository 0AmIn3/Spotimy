/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Monserrat: ['Montserrat', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}