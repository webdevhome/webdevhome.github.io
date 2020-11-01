import { AppTheme } from '../../../stores/appSettings/appSettingsReducer'
import {
  getStorageValue,
  setStorageValue,
  StorageKey
} from '../localStorageService'

export function loadThemeSetting(): AppTheme {
  const value = getStorageValue(StorageKey.themeSetting) as AppTheme

  const noThemeValue = value === null
  const invalidThemeValue =
    value !== AppTheme.auto &&
    value !== AppTheme.light &&
    value !== AppTheme.dark

  if (invalidThemeValue) saveThemeSetting(AppTheme.auto)
  if (noThemeValue || invalidThemeValue) return AppTheme.auto

  return value
}

export function saveThemeSetting(value: AppTheme): void {
  setStorageValue(StorageKey.themeSetting, value)
}
