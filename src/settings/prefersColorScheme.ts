import { themeStore } from './themeStore.ts'

export const prefersDarkQuery = matchMedia('(prefers-color-scheme: dark)')

prefersDarkQuery.addEventListener('change', (event) => {
  themeStore.setPrefersDark(event.matches)
})
