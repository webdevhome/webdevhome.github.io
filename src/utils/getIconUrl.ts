export function getIconUrl(icon: string): string {
  return `${import.meta.env.VITE_PUBLIC_URL ?? ''}/simple-icons/${icon}.svg`
}
