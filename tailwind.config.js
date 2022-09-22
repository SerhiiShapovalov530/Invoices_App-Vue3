/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
