import {
  getStorageValue,
  setStorageValue,
  StorageKey,
} from '../localStorageService'

export function loadShowDescriptionsSetting(): boolean {
  const value = getStorageValue(StorageKey.showDescriptionsSetting)

  return value === 'true' ? true : false
}

export function saveShowDescriptionsSetting(value: boolean): void {
  setStorageValue(StorageKey.showDescriptionsSetting, String(value))
}
