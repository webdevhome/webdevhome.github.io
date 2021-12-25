import { AppSettingsActions, SettingsActions } from './appSettingsActions'

export enum AppTheme {
  auto = 'auto',
  light = 'light',
  dark = 'dark',
}

interface AppSettingsState {
  theme: AppTheme
  showDescriptions: boolean
}

const initialState: AppSettingsState = {
  theme: AppTheme.auto,
  showDescriptions: false,
}

export function appSettings(
  state = initialState,
  action: AppSettingsActions
): AppSettingsState {
  switch (action.type) {
    case SettingsActions.setTheme: {
      return { ...state, theme: action.payload }
    }

    case SettingsActions.setDisplayDescription: {
      return { ...state, showDescriptions: action.payload }
    }

    default: {
      return state
    }
  }
}
