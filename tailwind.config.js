/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'principal-100': '#000',
        'secondary-300': '#333',
        'secondary-500': '#111',
      },
    },
  },
  plugins: [],
}
