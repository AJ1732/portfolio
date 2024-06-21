/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#747bff",
          400: "#535bf2",
          500: "#646cff",
        },
      },
    },
  },
  plugins: [],
};
