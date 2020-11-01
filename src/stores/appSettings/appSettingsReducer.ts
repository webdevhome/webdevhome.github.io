import { AppSettingsActions, SET_THEME } from './appSettingsActions'

export enum AppTheme {
  auto = 'auto',
  light = 'light',
  dark = 'dark',
}

interface AppSettingsState {
  theme: AppTheme
}

const initialState: AppSettingsState = {
  theme: AppTheme.auto,
}

export function appSettings(
  state = initialState,
  action: AppSettingsActions
): AppSettingsState {
  switch (action.type) {
    case SET_THEME: {
      return { ...state, theme: action.payload }
    }

    default: {
      return state
    }
  }
}
