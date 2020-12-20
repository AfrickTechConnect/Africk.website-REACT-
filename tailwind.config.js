module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:  {
        afrkblue: '#261D56',
        afrkgreen: "#23B682",
        afrkpurple: '#C2B7EE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
