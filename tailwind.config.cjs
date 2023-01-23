/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '425px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      xxl: '2560px',
    },
  },
  plugins: [],
};
