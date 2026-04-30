import { useAtom } from '@xoid/react'
import { useEffect } from 'react'
import { atom } from 'xoid'
import type { ValuesOf } from '../utilityTypes.ts'
import { defaultConverter, storageMapping } from '../utils/storageMapping.ts'

export const appTheme = { auto: 'auto', light: 'light', dark: 'dark' }
const effectiveThemes = [appTheme.light, appTheme.dark] as const

export type AppTheme = ValuesOf<typeof appTheme>

const themeStorageMapping = storageMapping(
  'wdh:app-theme',
  appTheme.auto,
  defaultConverter,
)
const $themeSetting = atom(themeStorageMapping.read())
$themeSetting.subscribe(themeStorageMapping.write)

export function isCurrentTheme(theme: AppTheme): boolean {
  return $themeSetting.value === theme
}

export function setTheme(theme: AppTheme): void {
  $themeSetting.set(theme)
}

const prefersDarkQuery = matchMedia('(prefers-color-scheme: dark)')

prefersDarkQuery.addEventListener('change', (event) => {
  $prefersDark.set(event.matches)
})

const $prefersDark = atom(prefersDarkQuery.matches)

const $effectiveTheme = atom((read) => {
  const theme = read($themeSetting)
  const prefersDark = read($prefersDark)

  if (theme === appTheme.auto) {
    return prefersDark ? appTheme.dark : appTheme.light
  }

  return theme
})

export function useThemes(): void {
  const effectiveTheme = useAtom($effectiveTheme)

  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0]

    for (const theme of effectiveThemes) {
      htmlElement.classList.toggle(theme, theme === effectiveTheme)
    }
  }, [effectiveTheme])
}
