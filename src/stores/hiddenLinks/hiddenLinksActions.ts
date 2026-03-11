import { LinkItem } from '../../links'

export const enum HiddenLinksActionType {
  SetHiddenLinks = 'set hidden links',
  ToggleHiddenLink = 'toggle hidden link',
  ToggleHiddenLinkGroup = 'toggle hidden link group',
}

type SetHiddenLinksAction = {
  type: HiddenLinksActionType.SetHiddenLinks
  payload: Array<LinkItem['url']>
}

type ToggleHiddenLinkAction = {
  type: HiddenLinksActionType.ToggleHiddenLink
  payload: LinkItem['url']
}

type ToggleHiddenLinksGroup = {
  type: HiddenLinksActionType.ToggleHiddenLinkGroup
  payload: Array<LinkItem['url']>
}

export type HiddenLinksActions =
  | SetHiddenLinksAction
  | ToggleHiddenLinkAction
  | ToggleHiddenLinksGroup

export function setHiddenLinks(
  links: Array<LinkItem['url']>,
): SetHiddenLinksAction {
  return {
    type: HiddenLinksActionType.SetHiddenLinks,
    payload: links,
  }
}

export function toggleHiddenLink(
  link: LinkItem['url'],
): ToggleHiddenLinkAction {
  return {
    type: HiddenLinksActionType.ToggleHiddenLink,
    payload: link,
  }
}

export function toggleHiddenLinksGroup(
  items: LinkItem[],
): ToggleHiddenLinksGroup {
  return {
    type: HiddenLinksActionType.ToggleHiddenLinkGroup,
    payload: items.map((i) => i.url),
  }
}
