export const defaultIconSize = { pixels: 24, className: 'w-[24px] h-[24px]' }

export type IconSize = 'default' | 'large'

export type IconSizeData = {
  pixels: number
  className: string
}

export function getIconSize(size: IconSize): IconSizeData {
  if (size === 'large') {
    return { pixels: 72, className: 'w-[72px] h-[72px]' }
  }

  return defaultIconSize
}
