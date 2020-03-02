export function getIconUrl (icon: string): string {
  return `${process.env.REACT_APP_PUBLIC_URL ?? ''}/simple-icons/${icon}.svg`
}
