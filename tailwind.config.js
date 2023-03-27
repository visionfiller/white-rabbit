/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#50324D",
        secondary:  "#26183D",
        third: "#AC948C",
        fourth: "#5E473B",
        fifth: "#D4C2B1ff"
        },
      
      fontFamily: {
        body: ['Bitter'],
      },
    },
  },
  plugins: [
    require("daisyui",'flowbite/plugin'),
    require('flowbite/plugin')],
}
