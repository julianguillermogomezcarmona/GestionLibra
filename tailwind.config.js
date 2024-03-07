/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(./public/Fondo_login.svg)",
      },
      colors: {
        1: "#57909F",
      },
    },
  },
  plugins: [],
};
