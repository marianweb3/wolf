/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        saotorpes: ["SaoTorpes", "sans-serif"],
        maladroit: ["CCMaladroit", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      screens: {
        xxl: "1780px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
