import { AppTheme } from './appSettingsReducer'

export const enum AppSettingsActionType {
  SetTheme = 'set theme',
  SetDisplayDescription = 'set display description',
  SetDisplayJumpLinks = 'set display jump links',
  SetDisplayJumpLinksMobile = 'set display jump links (mobile)',
  SetDisplayBackground = 'set display background',
  SetOpenLinksInNewTab = 'set open links in new tab',
}

type SetThemeAction = {
  type: AppSettingsActionType.SetTheme
  payload: AppTheme
}

type SetDisplayDescriptionAction = {
  type: AppSettingsActionType.SetDisplayDescription
  payload: boolean
}

type SetDisplayJumpLinksAction = {
  type: AppSettingsActionType.SetDisplayJumpLinks
  payload: boolean
}

type SetDisplayJumpLinksMobileAction = {
  type: AppSettingsActionType.SetDisplayJumpLinksMobile
  payload: boolean
}

type SetDisplayBackgroundAction = {
  type: AppSettingsActionType.SetDisplayBackground
  payload: boolean
}

type SetOpenLinksInNewTabAction = {
  type: AppSettingsActionType.SetOpenLinksInNewTab
  payload: boolean
}

export type AppSettingsActions =
  | SetThemeAction
  | SetDisplayDescriptionAction
  | SetDisplayJumpLinksAction
  | SetDisplayJumpLinksMobileAction
  | SetDisplayBackgroundAction
  | SetOpenLinksInNewTabAction

export function setTheme(payload: AppTheme): SetThemeAction {
  return { type: AppSettingsActionType.SetTheme, payload }
}

export function setDisplayDescription(
  payload: boolean,
): SetDisplayDescriptionAction {
  return { type: AppSettingsActionType.SetDisplayDescription, payload }
}

export function setDisplayJumpLinks(
  payload: boolean,
): SetDisplayJumpLinksAction {
  return { type: AppSettingsActionType.SetDisplayJumpLinks, payload }
}

export function setDisplayJumpLinksMobile(
  payload: boolean,
): SetDisplayJumpLinksMobileAction {
  return { type: AppSettingsActionType.SetDisplayJumpLinksMobile, payload }
}

export function setDisplayBackground(
  payload: boolean,
): SetDisplayBackgroundAction {
  return { type: AppSettingsActionType.SetDisplayBackground, payload }
}

export function setOpenLinksInNewTab(
  payload: boolean,
): SetOpenLinksInNewTabAction {
  return { type: AppSettingsActionType.SetOpenLinksInNewTab, payload }
}
