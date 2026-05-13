import { atom, readonlyType } from 'nanostores'
import type { StoreObject } from '../utils/nanostores.ts'

export type SimpleIconsIconData = { type: 'si'; path: string; hex: string }
export type FileIconData = { type: 'file'; filepath: string }

export type IconData = SimpleIconsIconData | FileIconData
export type IconType = IconData['type']

type IconCache = Record<string, IconData | null>

const $iconCache = atom<IconCache>({})

export const iconCacheStore = {
  $iconCache: readonlyType($iconCache),

  registerIcon(iconString: string) {
    $iconCache.set({ ...$iconCache.get(), [iconString]: null })
  },

  addIcon(iconString: string, icon: IconData): void {
    $iconCache.set({ ...$iconCache.get(), [iconString]: icon })
  },

  hasIcon: (iconString: string) => iconString in $iconCache.get(),
} satisfies StoreObject
