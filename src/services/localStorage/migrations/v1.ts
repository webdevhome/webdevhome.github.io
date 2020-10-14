import { setStorageValue, StorageKey } from '../localStorageService'

export function migrateToV1(): void {
  const wrongThemeSettingKey = 'sdh:theme-setting'
  const themeSetting = localStorage.getItem(wrongThemeSettingKey)

  if (themeSetting !== null) {
    setStorageValue(StorageKey.themeSetting, themeSetting)
    localStorage.removeItem(wrongThemeSettingKey)
  }

  setStorageValue(StorageKey.storageVersion, 'v1')
}
