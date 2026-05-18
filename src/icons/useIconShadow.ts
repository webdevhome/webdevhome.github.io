import type { IconSize } from './useIconSizeData.ts'

export function useIconShadow(iconSize: IconSize): string {
  const iconCss = (() => {
    if (iconSize === 'default') {
      return 'drop-shadow(0 0 4px rgb(from white r g b / 0.5)) drop-shadow(0 0 1px white)'
    }

    return 'drop-shadow(0 0 12px white) drop-shadow(0 0 8px white)'
  })()

  return iconCss
}
