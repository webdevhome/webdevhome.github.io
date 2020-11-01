import { useSelector } from 'react-redux'
import { AppState } from '..'
import { AppMode } from './appModeReducer'

export function useIsCurrentAppMode(): (...mode: AppMode[]) => boolean {
  const currentMode = useSelector(
    (state: AppState) => state.appMode.currentMode
  )

  return function isCurrentAppMode(...modes) {
    return modes.includes(currentMode)
  }
}
