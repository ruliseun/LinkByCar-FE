/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003E48",
        secondary: "#f4fafa",
        tertiary: "#35ffe8",
        textColor: "#222222",
        strong: "#fff48b",
        blackText: "#00171F",
      },
      screens: {
        xxxsm: "310px",
        xxsm: "380px",
        xsm: "430px",
        mini: "600px",
        grid: "712px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
