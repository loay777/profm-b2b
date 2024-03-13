/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FAFDFF",
        secondary: "#4C959B",
        tertiary: "#ebf4f4",
        "black-100": "#041f28",
        "black-200": "#03171e",
        "white-100": "#ffffff",
        "svg-color1": "#3c7a91"
        
        
      },
      boxShadow: {
        card: "0px 35px 120px -15px #D3E2CF",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.svg')",
      },
      container: {
        center: true,
      },
      fontFamily: {
        'baysan': ['DG-Baysan-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};