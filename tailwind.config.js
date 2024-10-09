/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        'bungee-inline': ["Bungee Inline", 'sans-serif'],
      },
      textColor: {
        primary: "#ffffff",
      },
      backgroundColor: {
        primary: "#ffffff",
        secondary: "#ffffff",
        third: "#007bff",
        accent: "#FF6500",
      }
    },
  },
  plugins: [],
}
