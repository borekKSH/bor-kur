/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '90rem',
        'container-padding': '69.375rem',
      },
    },
    fontFamily: {
      cursive: "'Fuzzy Bubbles', cursive;",
      'sans-serif': "'Lato', sans-serif",
    },
  },
  plugins: [],
};
