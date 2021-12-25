import { mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
import { useCallback, useEffect, useMemo } from 'react'
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

export function useThemeSwitcher(): UseThemeSwitcherResult {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.appSettings.theme)

  const bodyElement = useMemo(
    () => globalThis.document.getElementsByTagName('body')[0],
    []
  )

  useEffect(() => {
    bodyElement.className = `${currentTheme}-theme`
  }, [bodyElement, currentTheme])

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

  const title = useMemo(() => {
    return `Switch theme (current theme: ${currentTheme})`
  }, [currentTheme])

  const switchTheme = useCallback((): void => {
    dispatch(setTheme(cycleTheme(currentTheme)))
  }, [currentTheme, dispatch])

  return { icon, title, switchTheme }
}
