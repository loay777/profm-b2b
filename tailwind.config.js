/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#356A7E",
        tertiary: "#b2eceb",
        "black-100": "#041f28",
        "black-200": "#03171e",
        "white-100": "#ffffff",
        
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
    },
  },
  plugins: [],
};