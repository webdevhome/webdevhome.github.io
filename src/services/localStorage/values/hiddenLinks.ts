import {
  getStorageValue,
  removeStorageValue,
  setStorageValue,
  StorageKey
} from '../localStorageService'

export function loadHiddenLinks(): string[] {
  const storageString = getStorageValue(StorageKey.hiddenItems)

  if (storageString === null) {
    return []
  }

  try {
    const storageValue = JSON.parse(storageString)

    if (!Array.isArray(storageValue)) {
      removeStorageValue(StorageKey.hiddenItems)
      return []
    }

    if (storageValue.some((value) => typeof value !== 'string')) {
      removeStorageValue(StorageKey.hiddenItems)
      return []
    }

    return storageValue
  } catch {
    removeStorageValue(StorageKey.hiddenItems)
    return []
  }
}

export function saveHiddenLinks(values: string[]): void {
  try {
    const storageString = JSON.stringify(values)
    setStorageValue(StorageKey.hiddenItems, storageString)
  } catch {
    throw new Error('[setHiddenLinks()] Values cannot be serialized to JSON.')
  }
}
