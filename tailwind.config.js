// const config = require('./themeConfig');
const rem = (px) => px / 16 + 'rem';
const defaultTheme = require('tailwindcss/defaultTheme');



module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    ...defaultTheme,
    container: {
      center: true,
    },
    extend: {

      colors: {
        primary: '#35939c',
        darkGrey: '#737373',
        lightGrey:'#d9d9d9d',
      },

      transitionProperty: {
        height: 'height',
      },


      fontFamily: {
        sans: `"Inter", sans-serif`,
      },

      fontWeight: {
        body: 400,
        heading: 400,
        semiBold: 600,
        bold: 700,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  corePlugins: {
    preflight: true,
  },
};
