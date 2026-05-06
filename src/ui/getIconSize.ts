export type IconSize = {
  pixels: number
  className: string
}

export const defaultIconSize = { pixels: 24, className: 'w-[24px] h-[24px]' }

export function getIconSize(size: 'default' | 'large'): IconSize {
  if (size === 'large') {
    return { pixels: 64, className: 'w-[64px] h-[64px]' }
  }

  return defaultIconSize
}
