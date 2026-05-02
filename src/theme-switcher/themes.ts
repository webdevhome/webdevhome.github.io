import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { atom, computed } from 'nanostores'
import { useEffect } from 'react'

type AppTheme = 'light' | 'dark'
type AppThemeSetting = AppTheme | 'auto'

const effectiveThemes: AppTheme[] = ['light', 'dark']

const $themeSetting = persistentAtom<AppThemeSetting>('wdh:app-theme', 'auto')

export function isCurrentTheme(theme: AppThemeSetting): boolean {
  return $themeSetting.value === theme
}

export function setTheme(theme: AppThemeSetting): void {
  $themeSetting.set(theme)
}

const prefersDarkQuery = matchMedia('(prefers-color-scheme: dark)')

prefersDarkQuery.addEventListener('change', (event) => {
  $prefersDark.set(event.matches)
})

const $prefersDark = atom(prefersDarkQuery.matches)

const $effectiveTheme = computed(
  [$themeSetting, $prefersDark],
  (theme, prefersDark): AppTheme => {
    if (theme === 'auto') {
      return prefersDark ? 'dark' : 'light'
    }

    return theme
  },
)

export function useThemes(): void {
  const effectiveTheme = useStore($effectiveTheme)

  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0]

    for (const theme of effectiveThemes) {
      htmlElement.classList.toggle(theme, theme === effectiveTheme)
    }
  }, [effectiveTheme])
}
