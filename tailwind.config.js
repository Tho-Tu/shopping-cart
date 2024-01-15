/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
