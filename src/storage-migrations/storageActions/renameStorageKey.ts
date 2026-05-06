export function renameStorageKey(oldKey: string, newKey: string) {
  const value = localStorage.getItem(oldKey)
  if (value === null) return

  localStorage.removeItem(oldKey)
  localStorage.setItem(newKey, value)
}
