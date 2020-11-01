import { AppActions } from '../actions'
import { SET_MODE } from './appModeActions'

export enum AppMode {
  default = 'DEFAULT',
  search = 'SEARCH',
  customize = 'CUSTOMIZE',
}

export interface AppModeState {
  currentMode: AppMode
}

const initialState: AppModeState = {
  currentMode: AppMode.default,
}

export function appMode(
  state = initialState,
  action: AppActions
): AppModeState {
  switch (action.type) {
    case SET_MODE: {
      return { ...state, currentMode: action.payload }
    }

    default: {
      return state
    }
  }
}
