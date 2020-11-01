import { AppTheme } from './appSettingsReducer'

export const SET_THEME = 'SET_THEME'

interface SetThemeAction {
  type: typeof SET_THEME
  payload: AppTheme
}

export type AppSettingsActions = SetThemeAction

export function setTheme(theme: AppTheme): SetThemeAction {
  return { type: SET_THEME, payload: theme }
}

export function cycleTheme(currentTheme: AppTheme): SetThemeAction {
  switch (currentTheme) {
    case AppTheme.auto: {
      return { type: SET_THEME, payload: AppTheme.light }
    }

    case AppTheme.light: {
      return { type: SET_THEME, payload: AppTheme.dark }
    }

    case AppTheme.dark: {
      return { type: SET_THEME, payload: AppTheme.auto }
    }
  }
}
