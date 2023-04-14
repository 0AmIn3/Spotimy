/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
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