/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pingar: ["PingAr", "sans-serif"],
        pingarbold: ["PingArBold", "sans-serif"],
      },
      colors: {
        primary: "#2c2a20",
        secondary: "#5e5c55",
      },
    },
  },
  plugins: [],
};
