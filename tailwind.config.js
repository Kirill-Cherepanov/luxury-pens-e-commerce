module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}', './public/index.html'],
  theme: {
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
