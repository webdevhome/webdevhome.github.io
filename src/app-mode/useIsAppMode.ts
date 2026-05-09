import { useStore } from '@nanostores/react'
import { type AppMode, $appMode } from './appModeStore.ts'

export function useIsAppMode(): (...modes: AppMode[]) => boolean {
  const mode = useStore($appMode)

  return (...modes) => modes.includes(mode)
}
