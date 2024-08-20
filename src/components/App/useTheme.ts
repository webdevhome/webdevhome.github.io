import { useEffect, useMemo, useState } from 'react'
import { AppTheme } from '../../stores/appSettings/appSettingsReducer'
import { useThemeSwitcher } from './useThemeSwitcher'

const prefersDarkQuery = '(prefers-color-scheme: dark)'

export function useTheme() {
  const { currentTheme } = useThemeSwitcher()

  const [prefersDark, setPrefersDark] = useState<boolean>(
    () => matchMedia(prefersDarkQuery).matches,
  )

  function handlePrefersColorSchemeChange(event: MediaQueryListEvent): void {
    setPrefersDark(event.matches)
  }

  useEffect(() => {
    matchMedia(prefersDarkQuery).addEventListener(
      'change',
      handlePrefersColorSchemeChange,
    )

    return () => {
      matchMedia(prefersDarkQuery).removeEventListener(
        'change',
        handlePrefersColorSchemeChange,
      )
    }
  }, [])

  const effectiveTheme = useMemo((): AppTheme.light | AppTheme.dark => {
    if (currentTheme === AppTheme.auto) {
      return prefersDark ? AppTheme.dark : AppTheme.light
    }

    return currentTheme
  }, [currentTheme, prefersDark])

  useEffect(() => {
    const htmlElement = document.getElementsByTagName('html')[0]
    if (htmlElement === undefined) return

    htmlElement.classList.toggle(
      AppTheme.light,
      effectiveTheme === AppTheme.light,
    )
    htmlElement.classList.toggle(
      AppTheme.dark,
      effectiveTheme === AppTheme.dark,
    )
  }, [effectiveTheme])
}
