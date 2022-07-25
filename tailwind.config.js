const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
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
