import { useStore } from '@nanostores/react'
import { type AppMode, appModeStore } from './appModeStore.ts'

export function isAppMode(...modes: AppMode[]): boolean {
  return modes.includes(appModeStore.$appMode.get())
}

export function useIsAppMode(): (...modes: AppMode[]) => boolean {
  const mode = useStore(appModeStore.$appMode)

  return (...modes) => modes.includes(mode)
}
