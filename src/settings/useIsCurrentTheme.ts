import { useStore } from '@nanostores/react'
import { type AppThemeSetting, themeStore } from './themes.ts'

export function useIsCurrentTheme(): (theme: AppThemeSetting) => boolean {
  const themeSetting = useStore(themeStore.$themeSetting)

  return (theme) => themeSetting === theme
}
