import { AppSettingsActions, SettingsActions } from './appSettingsActions'

export enum AppTheme {
  auto = 'auto',
  light = 'light',
  dark = 'dark',
}

type AppSettingsState = {
  theme: AppTheme
  showDescriptions: boolean
  showJumpLinks: boolean
}

const initialState: AppSettingsState = {
  theme: AppTheme.auto,
  showDescriptions: false,
  showJumpLinks: true,
}

export function appSettings(
  state = initialState,
  action: AppSettingsActions,
): AppSettingsState {
  switch (action.type) {
    case SettingsActions.setTheme: {
      return { ...state, theme: action.payload }
    }

    case SettingsActions.setDisplayDescription: {
      return { ...state, showDescriptions: action.payload }
    }

    case SettingsActions.setDisplayJumpLinks: {
      return { ...state, showJumpLinks: action.payload }
    }

    default: {
      return state
    }
  }
}
