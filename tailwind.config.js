/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  safelist: [
    { pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-100/ },
    { pattern: /bg-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-600/, variants: ['dark'] },
    { pattern: /text-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-800/ },
    { pattern: /text-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-50/, variants: ['dark'] },
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Segoe UI', 'Roboto', 'Verdana', 'Arial', 'sans-serif'],
      mono: ['JetBrains Mono', 'IBM Plex Mono', 'Cascadia Code', 'Roboto Mono', 'Fira Code', 'monospace'],
    },
    extend: {
      colors: {
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
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant('supports-backdrop', '@supports (backdrop-filter: blur(1px))')

      addUtilities({
        '.scrollbargutter-auto': { 'scrollbar-gutter': 'auto' },
        '.scrollbargutter-stable': { 'scrollbar-gutter': 'stable' },
        '.scrollbargutter-stable-both': {
          'scrollbar-gutter': 'stable both-edges',
        },
        '.scrollbargutter-inherit': { 'scrollbar-gutter': 'inherit' },
        '.scrollbargutter-initial': { 'scrollbar-gutter': 'initial' },
        '.scrollbargutter-revert': { 'scrollbar-gutter': 'revert' },
        '.scrollbargutter-unset': { 'scrollbar-gutter': 'unset' },
      })
    }),
  ],
}
