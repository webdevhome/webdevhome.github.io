/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      brand: {
        50: '#f6fdfd',
        100: '#cce6e5',
        200: '#a1cfce',
        300: '#76b9b8',
        400: '#4aa3a2',
        500: '#1f8d8b',
        600: '#1e7170',
        700: '#1b5857',
        800: '#163f3e',
        900: '#102828',
      },
    },
    fontFamily: {
      sans: ['Segoe UI', 'Roboto', 'Verdana', 'Arial', 'sans-serif'],
      mono: ['Consolas', 'Fira Code', 'Roboto Mono', 'monospace'],
    },
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('supports-backdrop', '@supports (backdrop-filter: blur(1px))')
    }),
  ],
}
