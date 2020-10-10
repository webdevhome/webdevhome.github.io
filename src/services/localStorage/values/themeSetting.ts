import { ThemeState } from '../../../App'
import {
  getStorageValue,
  setStorageValue,
  StorageKey
} from '../localStorageService'

export function loadThemeSetting(): ThemeState {
  const value = getStorageValue(StorageKey.themeSetting)

  if (value === null) return 'auto'
  if (value !== 'auto' && value !== 'light' && value !== 'dark') return 'auto'

  return value
}

export function saveThemeSetting(value: ThemeState): void {
  setStorageValue(StorageKey.themeSetting, value)
}
