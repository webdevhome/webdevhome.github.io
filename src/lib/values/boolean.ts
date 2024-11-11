export function parseBool(value: string): boolean | null {
  if (value.toLowerCase() === 'true') {
    return true
  }

  if (value.toLowerCase() === 'false') {
    return false
  }

  return null
}
