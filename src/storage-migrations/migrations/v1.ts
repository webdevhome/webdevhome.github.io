import { storageVersionKey } from '../migrateLocalStorage.ts'
import { renameStorageKey } from '../storageActions/renameStorageKey.ts'

export function migrateToV1() {
  renameStorageKey('sdh:theme-setting', 'wdh:theme-setting')

  localStorage.setItem(storageVersionKey, 'v1')
}
