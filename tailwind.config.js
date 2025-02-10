/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#E98112",
        primary: "#522F11",
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
