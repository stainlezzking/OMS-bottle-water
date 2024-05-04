/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#fe8101",
        ash: "#1A1717",
      },
      fontFamily: {
        title: ["Segoe UI", "DM Sans"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
