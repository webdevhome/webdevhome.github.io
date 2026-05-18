export type IconSize = 'default' | 'large'

export type IconSizeData = {
  size: IconSize
  pixels: number
  className: string
}

export function useIconSizeData(size: IconSize): IconSizeData {
  if (size === 'large') {
    return { size, pixels: 72, className: 'w-[72px] h-[72px]' }
  }

  return { size: 'default', pixels: 24, className: 'w-[24px] h-[24px]' }
}
