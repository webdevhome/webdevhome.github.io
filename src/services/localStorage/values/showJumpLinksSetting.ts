import {
  getStorageValue,
  setStorageValue,
  StorageKey,
} from '../localStorageService'

export function loadShowJumpLinksSetting(): boolean {
  const value = getStorageValue(StorageKey.showJumpLinksSetting)
  return value === 'true'
}

export function saveShowJumpLinksSetting(value: boolean): void {
  setStorageValue(StorageKey.showJumpLinksSetting, String(value))
}
