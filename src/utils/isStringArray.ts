export function isStringArray(value: unknown): value is string[] {
  if (!Array.isArray(value)) {
    return false
  }
  if (value.some((item) => typeof item !== 'string')) {
    return false
  }
  return true
}
