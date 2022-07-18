/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        vdblue: "#090b1a",
        ddblue: "#1b1938",
        sviolet: "#aa5cdb",
      },
      fontFamily: {
        inter: "Inter",
        lexend: "Lexend Deca",
      },
    },
  },
  plugins: [],
};
