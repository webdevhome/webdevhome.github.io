import { mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import {
  cycleTheme,
  setTheme,
} from '../../stores/appSettings/appSettingsActions'
import { AppTheme } from '../../stores/appSettings/appSettingsReducer'

export interface UseThemeSwitcherResult {
  icon: string
  title: string
  switchTheme: () => void
}

const prefersDarkQuery = '(prefers-color-scheme: dark)'

export function useThemeSwitcher(): UseThemeSwitcherResult {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.appSettings.theme)

  const [prefersDark, setPrefersDark] = useState<boolean>(
    () => matchMedia(prefersDarkQuery).matches,
  )

  const [effectiveTheme, setEffectiveTheme] = useState<
    AppTheme.light | AppTheme.dark
  >(AppTheme.light)

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

  // Set effectiveTheme
  useEffect(() => {
    if (currentTheme === AppTheme.auto) {
      setEffectiveTheme(prefersDark ? AppTheme.dark : AppTheme.light)
      return
    }

    setEffectiveTheme(currentTheme)
  }, [currentTheme, prefersDark])

  // Set className
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

  const icon = useMemo((): string => {
    switch (currentTheme) {
      case AppTheme.light:
        return mdiWeatherSunny
      case AppTheme.dark:
        return mdiWeatherNight
      default:
        return mdiThemeLightDark
    }
  }, [currentTheme])

  const title = useMemo(() => `Theme: ${currentTheme}`, [currentTheme])

  const switchTheme = useCallback((): void => {
    dispatch(setTheme(cycleTheme(currentTheme)))
  }, [currentTheme, dispatch])

  return { icon, title, switchTheme }
}
