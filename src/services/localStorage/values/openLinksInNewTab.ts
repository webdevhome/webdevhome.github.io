import {
  getStorageValue,
  setStorageValue,
  StorageKey,
} from '../localStorageService'

export function loadOpenLinksInNewTabSetting(): boolean {
  const value = getStorageValue(StorageKey.openLinksInNewTab)
  return value === 'true'
}

export function saveOpenLinksInNewTabSetting(value: boolean): void {
  setStorageValue(StorageKey.openLinksInNewTab, String(value))
}
