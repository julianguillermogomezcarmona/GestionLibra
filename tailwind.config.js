/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(./public/Fondo_login.svg)",
        inventario: "url(./public/inventario.jpg)",
        client: "url(./public/clientes.jpg)",
        contables: "url(./public/contable.jpg)",
        ventas: "url(./public/ventas.jpg)",
        bancos: "url(./public/bancos.jpg)"
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      colors: {
        1: "#57909F",
      },
    },
  },
  plugins: [],
};
