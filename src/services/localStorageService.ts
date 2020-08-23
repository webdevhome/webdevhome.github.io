import { themeStates, ThemeState } from '../App'

type StorageKey = 'wdh:hidden-items' | 'sdh:theme-setting'

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

export function getThemeStateSetting (): ThemeState {
  const key: StorageKey = 'sdh:theme-setting'
  const storageString = localStorage.getItem(key)

  if (storageString === null) { return 'auto' }
  if (
    storageString !== 'auto' &&
    storageString !== 'light' &&
    storageString !== 'dark'
  ) { return 'auto' }

  return storageString
}

export function setThemeStateSetting (value: ThemeState): void {
  const key: StorageKey = 'sdh:theme-setting'

  localStorage.setItem(key, value)
}
