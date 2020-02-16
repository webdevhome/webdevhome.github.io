type StorageKey = 'wdh:hidden-items'

export function getHiddenLinks (): string[] {
  const key: StorageKey = 'wdh:hidden-items'
  const storageString = localStorage.getItem(key)

  if (storageString === null) { return [] }

  try {
    const storageValue = JSON.parse(storageString)

    if (!Array.isArray(storageValue)) {
      localStorage.removeItem(key)
      return []
    }

    if (storageValue.some(value => typeof value !== 'string')) {
      localStorage.removeItem(key)
      return []
    }

    return storageValue
  } catch {
    localStorage.removeItem(key)
    return []
  }
}

export function setHiddenLinks (values: string[]): void {
  const key: StorageKey = 'wdh:hidden-items'

  try {
    const storageString = JSON.stringify(values)
    localStorage.setItem(key, storageString)
  } catch {
    throw new Error('[setHiddenLinks()] Values cannot be serialized to JSON.')
  }
}
