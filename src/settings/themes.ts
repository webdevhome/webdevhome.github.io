import { persistentAtom } from '@nanostores/persistent'
import { atom, computed, readonlyType } from 'nanostores'
import type { StoreObject } from '../utils/nanostores.ts'
import { prefersDarkQuery } from './prefersColorScheme.ts'

export type AppTheme = 'light' | 'dark'
export type AppThemeSetting = AppTheme | 'auto'

const $theme = persistentAtom<AppThemeSetting>('wdh:app-theme', 'auto')
const $prefersDark = atom(prefersDarkQuery.matches)

const $effectiveTheme = computed(
  [$theme, $prefersDark],
  (theme, prefersDark): AppTheme => {
    if (theme === 'auto') {
      return prefersDark ? 'dark' : 'light'
    }

    return theme
  },
)

export const themeStore = {
  $themeSetting: readonlyType($theme),
  $prefersDark: readonlyType($prefersDark),

  $effectiveTheme,

  setThemeSetting(theme: AppThemeSetting) {
    $theme.set(theme)
  },

  setPrefersDark(prefersDark: boolean) {
    $prefersDark.set(prefersDark)
  },
} satisfies StoreObject
