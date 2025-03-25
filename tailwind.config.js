/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0A192F',     // Deep Navy Blue (Bolder & Confident)
          crimson: '#8B0000',  // Bold Crimson
          taupe: '#a67d44',    // Warm Taupe (Elegant & Classic)
          beige: '#cdbcab',    // Light Beige (Soft & Balanced)
          gray: '#899481',     // Light Gray
          white: '#EFE9E1',    // Off White (Sophisticated)
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
