import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { LinkItem } from '../links'
import {
  loadHiddenLinks, saveHiddenLinks
} from '../services/localStorage/values/hiddenLinks'
import { contextProviderWarning } from './utils'

export interface HiddenLinksContextValue {
  hiddenLinks: string[]
  setLinks: Dispatch<SetStateAction<string[]>>
  toggleLink: (url: string) => void
  toggleGroup: (
    state: LinkVisibilityAction,
    ...urls: Array<LinkItem['url']>
  ) => void
  allLinksAreHidden: (...links: LinkItem[]) => boolean
}

export const HiddenLinksContext = createContext<HiddenLinksContextValue>({
  hiddenLinks: [],
  setLinks: contextProviderWarning,
  toggleLink: contextProviderWarning,
  toggleGroup: contextProviderWarning,
  allLinksAreHidden: contextProviderWarning,
})

export enum LinkVisibilityAction {
  show,
  hide,
}

export function useHiddenLinksContextValue(): HiddenLinksContextValue {
  const [hiddenLinks, setHiddenLinks] = useState<string[]>(loadHiddenLinks())

  function updateHiddenLInks(links:Array<LinkItem['url']>):void{
    setHiddenLinks(links)
    saveHiddenLinks(links)
  }

  function toggleLink(urlToToggle: LinkItem['url']): void {
    const linkToUnhide = (url: string): boolean => url !== urlToToggle
    const newHiddenLinks = hiddenLinks.includes(urlToToggle)
      ? hiddenLinks.filter(linkToUnhide)
      : [...hiddenLinks, urlToToggle]

    updateHiddenLInks(newHiddenLinks)
  }

  function toggleGroup(
    state: LinkVisibilityAction,
    ...urls: Array<LinkItem['url']>
  ): void {
    const linksToUnhide = (url: string): boolean => !urls.includes(url)
    const linksToHide = (link: string): boolean => !hiddenLinks.includes(link)
    const newHiddenLinks =
      state === LinkVisibilityAction.show
        ? hiddenLinks.filter(linksToUnhide)
        : [...hiddenLinks, ...urls.filter(linksToHide)]

    updateHiddenLInks(newHiddenLinks)
  }

  function allLinksAreHidden(...links: LinkItem[]): boolean {
    return links.every((link) => hiddenLinks.includes(link.url))
  }

  return { hiddenLinks, setLinks: setHiddenLinks, toggleLink, toggleGroup, allLinksAreHidden }
}
