/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C8A951",
        maroon: "#5C1D1D",
        cream: "#F5E6C8",
        softgray: "#EFE8DC",
        darktext: "#111111",
      },
    },
  },
  plugins: [],
}