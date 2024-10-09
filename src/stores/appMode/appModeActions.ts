import { AppMode } from './appModeReducer'

export const SET_MODE = 'SET_MODE'

interface SetModeAction {
  type: typeof SET_MODE
  payload: AppMode
}

export type AppModeActions = SetModeAction

export function setAppMode(mode: AppMode): SetModeAction {
  return { type: SET_MODE, payload: mode }
}

export function toggleAppMode(
  mode: AppMode,
  currentMode: AppMode,
): SetModeAction {
  return {
    type: SET_MODE,
    payload: currentMode === AppMode.default ? mode : AppMode.default,
  }
}
