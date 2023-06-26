/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyish: {
          100: "#eaeaea",
          200: "#fafafa",
          300: "#696969",
        },
        blackish: {
          100: "#111",
          600: "#666",
        },
        blueish: {
          100: "#0070f3",
        },
      },
      boxShadow: {
        "blue-btn": "0 4px 14px 0 rgb(0 118 255 / 39%)",
      },
    },
  },
  plugins: [],
};
