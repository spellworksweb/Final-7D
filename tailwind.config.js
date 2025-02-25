/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1E1E1E', // Softer black
          lighter: '#2A2A2A', // Matte black
          darker: '#161616', // Slightly lighter dark
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
          dark: '#E5C100',
        },
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};