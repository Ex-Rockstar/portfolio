/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Ensure this includes all your JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#322D29',    // Dark Brown/Black
          burgundy: '#72383D', // Burgundy
          taupe: '#AC9C8D',   // Warm Taupe
          beige: '#D1C7BD',   // Light Beige
          gray: '#D9D9D9',    // Light Gray
          white: '#EFE9E1',   // Off White
        },
      },
      fontFamily: {
        body: ['merriweather-regular'],
        heading1: ['raleway-light'],
        heading2: ['raleway-800'],
      },
    },
  },
  plugins: [],
};
