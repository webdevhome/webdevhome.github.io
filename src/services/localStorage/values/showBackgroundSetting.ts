import {
  getStorageValue,
  setStorageValue,
  StorageKey,
} from '../localStorageService'

export function loadShowBackgroundSetting(): boolean {
  const value = getStorageValue(StorageKey.showBackgroundSetting)
  return value === 'true'
}

export function saveShowBackgroundSetting(value: boolean): void {
  setStorageValue(StorageKey.showBackgroundSetting, String(value))
}
