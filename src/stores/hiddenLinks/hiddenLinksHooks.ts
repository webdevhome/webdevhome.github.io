import { useAppSelector } from '..'
import { LinkItem } from '../../links'

export function useAllLinksInGroupAreHidden(): (
  links: Array<LinkItem['url']>
) => boolean {
  const hiddenLinks = useAppSelector((state) => state.hiddenLinks.links)

  return function allLinksInGroupAreHidden(links) {
    return links.every((link) => hiddenLinks.includes(link))
  }
}

export function useGetIsLinkHidden(): (link: LinkItem) => boolean {
  const hiddenLinks = useAppSelector((state) => state.hiddenLinks.links)

  return function getIsLinkHidden(link) {
    return hiddenLinks.includes(link.url)
  }
}
