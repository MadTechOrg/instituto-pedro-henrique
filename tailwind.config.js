module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        burntSienna: '#EF865F',
        doveGray: '#2D313D',
        quarterPearl: '#FFFCF1',
        conch: '#C3D3C7',
        watusi: '#FFDCCF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
