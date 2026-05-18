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

  const maxLightness = 40
  // const tanh = `(1 - 2 / (pow(e, 2 * (l / ${maxLightness})) + 1))`
  // const lightValue = `hsl(from ${cssColorValue} h calc(s * 0.9) calc(${tanh} * ${maxLightness}))`
  return `hsl(from ${cssColorValue} h s calc(l - (l * l) / (${maxLightness} * 4)))`
}
