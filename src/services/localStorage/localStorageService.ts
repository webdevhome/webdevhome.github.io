import { migrateToV1 } from './migrations/v1'

export enum StorageKey {
  storageVersion = 'wdh:storage-version',
  hiddenItems = 'wdh:hidden-items',
  themeSetting = 'wdh:theme-setting',
}

export function getStorageValue(key: StorageKey): string | null
export function getStorageValue(key: StorageKey, fallback: string): string
export function getStorageValue(key: StorageKey, fallback?: string): string | null {
  return localStorage.getItem(key) ?? fallback ?? null
}

export function setStorageValue(key: StorageKey, value: string): void {
  localStorage.setItem(key, value)
}

export function removeStorageValue(key: StorageKey): void {
  localStorage.removeItem(key)
}

migrateLocalStorage()

function migrateLocalStorage(): void {
  const localStorageVersion = getStorageValue(StorageKey.storageVersion, 'v0')

  switch (localStorageVersion) {
    case 'v0':
      migrateToV1()
  }
}
