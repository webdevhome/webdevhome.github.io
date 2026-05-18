import { useStore } from '@nanostores/react'
import { type AppThemeSetting, themeStore } from './themeStore.ts'

export function useIsCurrentTheme(): (theme: AppThemeSetting) => boolean {
  const themeSetting = useStore(themeStore.$themeSetting)

  return (theme) => themeSetting === theme
}
