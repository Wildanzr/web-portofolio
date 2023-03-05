/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screen: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        main: '#0F172A',
        alternate: '#334155',
        snow: '#F2F4F7',
        milk: '#94A3B8',
        green: colors.green,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        zinc: colors.zinc,
        blue: colors.blue,
        red: colors.red,
        cyan: colors.cyan
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  darkMode: 'class',
  plugins: [require('daisyui')]
}
