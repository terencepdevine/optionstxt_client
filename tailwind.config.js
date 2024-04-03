/* eslint-disable import/no-anonymous-default-export */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Jost", "sans-serif"],
    },
    extend: {
      keyframes: {
        grow: {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        grow: "grow 1s ease infinite",
      },
    },
  },
  plugins: [
    "prettier-plugin-organize-attributes",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
    require("tailwindcss-animation-delay"),
  ],
};
