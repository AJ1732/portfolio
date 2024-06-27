/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        aura: "3px -8px 120px -60px rgba(83, 91, 242, 0.75)",
        "aura-l": "3px -8px 120px -40px rgba(83, 91, 242, 0.75)",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
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
