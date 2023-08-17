/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      'primary': '#1CC7C1',
      'secondary': '#3A4256',
      'header-color': "#203047",
      'botton-color': '#19D3AE'
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

