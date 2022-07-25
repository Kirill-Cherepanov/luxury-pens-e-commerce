const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        // amber, gray, neutral, slate, stone, zinc
        primary: colors.stone,
        secondary: colors.stone
      },
      spacing: {
        100: '25rem'
      },
      fontFamily: {
        sansita: 'Sansita Swashed, cursive'
      },
      translate: {
        screen: '100vw'
      }
    }
  },
  plugins: []
};
