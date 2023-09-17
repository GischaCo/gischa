/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d2089",
        secondary: "#ae56d4",
        light: "#FDECFF",
        dark: "#19031d",
      },
    },
  },
  plugins: [],
  safelist: ["border-primary"],
};
