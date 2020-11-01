import { useSelector } from 'react-redux'
import { AppState } from '..'
import { LinkItem } from '../../links'

export function useAllLinksInGroupAreHidden(): (
  links: Array<LinkItem['url']>
) => boolean {
  const hiddenLinks = useSelector((state: AppState) => state.hiddenLinks.links)

  return function allLinksInGroupAreHidden(links) {
    return links.every((link) => hiddenLinks.includes(link))
  }
}

export function useLinkIsHidden(): (link: LinkItem) => boolean {
  const hiddenLinks = useSelector((state: AppState) => state.hiddenLinks.links)

  return function linkIsHidden(link) {
    return hiddenLinks.includes(link.url)
  }
}
