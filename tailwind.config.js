/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#BD9E8Fff",
        secondary:  "#402549ff",
        third: "#9C8276ff",
        fourth: "#755558ff",
        fifth: "#D4C2B1ff"
        },
      
      fontFamily: {
        body: ['Bitter'],
      },
    },
  },
  plugins: [require("daisyui")],
}
