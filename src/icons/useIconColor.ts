import type { IconData } from './iconCacheStore.ts'

const maxLightness = 75
const divisor = 10_000 / (100 - maxLightness)
const l = `calc(l - ((l * l) / ${divisor}))`

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

  return `hsl(from ${cssColorValue} h s ${l})`
}
