import { mdiThemeLightDark, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'
import { useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../stores'
import { cycleTheme } from '../../stores/appSettings/appSettingsActions'
import { AppTheme } from '../../stores/appSettings/appSettingsReducer'

export interface UseThemeSwitcherReturn {
  icon: string
  switchTheme: () => void
}

export function useThemeSwitcher(): UseThemeSwitcherReturn {
  const dispatch = useDispatch()
  const currentTheme = useSelector((state: AppState) => state.appSettings.theme)

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

  const switchTheme = useCallback((): void => {
    dispatch(cycleTheme(currentTheme))
  }, [currentTheme, dispatch])

  return { icon, switchTheme }
}
