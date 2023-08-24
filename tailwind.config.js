/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          DEFAULT: '#1D1C1D',
          50: '#F5F5F5',
          100: '#E9E8E9',
          200: '#D0CED0',
          300: '#B7B4B7',
          400: '#9E9A9E',
          500: '#858085',
          600: '#6B676B',
          700: '#514E51',
          800: '#373537',
          900: '#1D1C1D',
          950: '#100F10',
        },
        primary: {
          DEFAULT: '#FF9900',
          50: '#FFD08A',
          100: '#FFCA7A',
          200: '#FFBE5C',
          300: '#FFB13D',
          400: '#FFA51F',
          500: '#FF9900',
          600: '#E68A00',
          700: '#CC7A00',
          800: '#B36B00',
          900: '#995C00',
          950: '#8C5400',
        },
      },
    },
  },
  plugins: [],
};
