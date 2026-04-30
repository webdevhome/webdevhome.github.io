import { storageVersionKey } from '../migrateLocalStorage.ts'
import { renameStorageKey } from '../storageActions/renameStorageKey.ts'

export function migrateToV2(): void {
  renameStorageKey('wdh:show-background-setting', 'wdh:show-background')
  renameStorageKey('wdh:show-descriptions-setting', 'wdh:show-descriptions')
  renameStorageKey('wdh:show-jump-links-setting', 'wdh:show-jump-links')
  renameStorageKey('wdh:theme-setting', 'wdh:app-theme')

  localStorage.setItem(storageVersionKey, 'v2')
}
