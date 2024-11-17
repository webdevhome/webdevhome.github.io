export function getSimpleIconsUrl(name?: string): string | undefined {
  if (name === undefined) {
    return undefined
  }

  return `${import.meta.env.VITE_PUBLIC_URL ?? ''}/simple-icons/${name}.svg`
}
