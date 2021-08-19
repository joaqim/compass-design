module.exports = {
  purge: [
    './src/components/**/*.tsx',
    // This is a convention for files that only include Styled Components.
    './src/components/**/*.styled.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
