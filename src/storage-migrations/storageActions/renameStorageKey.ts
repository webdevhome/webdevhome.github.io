export function renameStorageKey(oldKey: string, newKey: string): void {
  const value = localStorage.getItem(oldKey)
  if (value === null) return

  localStorage.removeItem(oldKey)
  localStorage.setItem(newKey, value)
}
