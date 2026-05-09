import { useStore } from '@nanostores/react'
import { useEffect } from 'react'
import { themeStore, type AppTheme } from './themes.ts'

export const effectiveThemes = ['light', 'dark'] satisfies AppTheme[]

export function useApplyTheme() {
  const effectiveTheme = useStore(themeStore.$effectiveTheme)

  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0]

    for (const theme of effectiveThemes) {
      htmlElement.classList.toggle(theme, theme === effectiveTheme)
    }
  }, [effectiveTheme])
}
