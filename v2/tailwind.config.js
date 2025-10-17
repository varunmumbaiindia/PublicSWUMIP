/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        brand: {
          turquoise: '#4ECDC4',
          lavender:  '#B19CD9',
          peach:     '#FFB6A3',
          bg:        '#0B1215',
          fg:        '#F7F9FA',
          muted:     '#9AA6AC',
        },
      },
      fontFamily: {
        sans: ['var(--font-plusjakarta)', 'Montserrat', ...fontFamily.sans],
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { soft: '0 8px 24px rgba(0,0,0,0.12)' },
    },
  },
  plugins: [],
};
