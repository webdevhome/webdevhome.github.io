import { LinkItem } from '../../../links'
import {
  getStorageValue,
  removeStorageValue,
  setStorageValue,
  StorageKey
} from '../localStorageService'

export function loadHiddenLinks(): Array<LinkItem['url']> {
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

export function saveHiddenLinks(values: Array<LinkItem['url']>): void {
  try {
    const storageString = JSON.stringify(values)
    setStorageValue(StorageKey.hiddenItems, storageString)
  } catch {
    throw new Error('[saveHiddenLinks()] "values" is no valid JSON.')
  }
}
