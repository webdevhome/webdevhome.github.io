import { useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setTheme } from '../../stores/appSettings/appSettingsActions'
import { AppTheme } from '../../stores/appSettings/appSettingsReducer'

export interface UseThemeSwitcherResult {
  currentTheme: AppTheme
  setLightTheme: () => void
  setDarkTheme: () => void
  setAutoTheme: () => void
  isLightTheme: boolean
  isDarkTheme: boolean
  isAutoTheme: boolean
}

export function useThemeSwitcher(): UseThemeSwitcherResult {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector((state) => state.appSettings.theme)

  const setLightTheme = useCallback(() => {
    dispatch(setTheme(AppTheme.light))
  }, [dispatch])

  const setDarkTheme = useCallback(() => {
    dispatch(setTheme(AppTheme.dark))
  }, [dispatch])

  const setAutoTheme = useCallback(() => {
    dispatch(setTheme(AppTheme.auto))
  }, [dispatch])

  const isLightTheme = useMemo(() => {
    return currentTheme === AppTheme.light
  }, [currentTheme])

  const isDarkTheme = useMemo(() => {
    return currentTheme === AppTheme.dark
  }, [currentTheme])

  const isAutoTheme = useMemo(() => {
    return currentTheme === AppTheme.auto
  }, [currentTheme])

  return {
    currentTheme,
    setLightTheme,
    setDarkTheme,
    setAutoTheme,
    isLightTheme,
    isDarkTheme,
    isAutoTheme,
  }
}
