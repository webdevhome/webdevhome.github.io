import { AppMode } from './appModeReducer'

export const enum AppModeActionType {
  SetMode = 'set app mode',
}

type SetAppModeAction = {
  type: AppModeActionType.SetMode
  payload: AppMode
}

export type AppModeActions = SetAppModeAction

export function setAppMode(mode: AppMode): SetAppModeAction {
  return { type: AppModeActionType.SetMode, payload: mode }
}

export function toggleAppMode(
  mode: AppMode,
  currentMode: AppMode,
): SetAppModeAction {
  return {
    type: AppModeActionType.SetMode,
    payload: currentMode === AppMode.default ? mode : AppMode.default,
  }
}
