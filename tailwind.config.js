/* eslint-disable import/no-anonymous-default-export */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      display: ["Jost", "sans-serif"],
    },
    extend: {
      animation: {
        grow: "grow 1s ease infinite",
      },
      backgroundImage: {
        auth: "url('../public/images/bg-auth.png')",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    "prettier-plugin-organize-attributes",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
};
