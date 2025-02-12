/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#98EB5D",
        primary: "#1F1F1F",
      },
      fontFamily: {
        "rubik-bubbles": ["Rubik Bubbles", "sans-serif"],
      },
      screens: {
        xs: "300px",
        mobile: "373px",
      },
    },
  },
  plugins: [],
};
