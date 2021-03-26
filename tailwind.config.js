module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      '2xl': '0 0 20px rgba(0,0,0,.5)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
