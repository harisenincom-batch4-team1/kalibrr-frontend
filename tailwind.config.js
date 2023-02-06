/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      main: "Plus Jakarta Sans",
    },
    colors: {
      blue: "#0086FF",
      red: "#e11d48",
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("flowbite/plugin"),
  ],
};
