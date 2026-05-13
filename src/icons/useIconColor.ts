import type { IconData } from './iconCacheStore.ts'

export type UseIconColor = {
  color: string | undefined
  iconData: IconData | null
}

export function useIconColor({ color, iconData }: UseIconColor) {
  const cssColorValue = (() => {
    if (color !== undefined) {
      return color
    }

    if (iconData?.type === 'si') {
      return `#${iconData.hex}`
    }

    return 'dimgray'
  })()

  return `light-dark(${cssColorValue}, hsl(from ${cssColorValue} h calc(s * 0.9) calc(l * 0.5 + 10)))`
}
