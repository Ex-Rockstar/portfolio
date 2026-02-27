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
          dark: '#1A1A1A',     // Deep Black
          light: '#FFF8E7',    // Warm Off-White
          pink: '#FF2E93',     // Hot Pink
          yellow: '#FFD700',   // Bright Yellow
          blue: '#00E5FF',     // Neon Blue
          green: '#00FF66',    // Neon Green
          purple: '#B5179E',   // Deep Purple
          orange: '#FF5722',   // Vibrant Orange
        },
      },
      fontFamily: {
        body: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(26,26,26,1)',
        'brutal-sm': '4px 4px 0px 0px rgba(26,26,26,1)',
        'brutal-lg': '12px 12px 0px 0px rgba(26,26,26,1)',
      },
    },
  },
  plugins: [],
};
