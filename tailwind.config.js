/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#981A1D",
        secondary: "#1F1F1F",
        tertiary: "#FCF6F5",
        light: "#FFD4D0",
      },
    },
  },
  plugins: [],
};
