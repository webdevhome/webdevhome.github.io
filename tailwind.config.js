/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      brand: colors.teal,
      gray: colors.stone,
    },
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('supports-backdrop', '@supports (backdrop-filter: blur(1px))')
    })
  ],
}
