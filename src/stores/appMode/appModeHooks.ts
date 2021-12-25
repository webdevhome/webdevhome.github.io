import { useAppSelector } from '..'
import { AppMode } from './appModeReducer'

export function useIsCurrentAppMode(): (...mode: AppMode[]) => boolean {
  const currentMode = useAppSelector((state) => state.appMode.currentMode)

  return function isCurrentAppMode(...modes) {
    return modes.includes(currentMode)
  }
}
