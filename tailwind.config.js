/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
};
