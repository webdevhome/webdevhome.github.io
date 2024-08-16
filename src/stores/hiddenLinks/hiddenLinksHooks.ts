import { useMemo } from 'react'
import { useAppSelector } from '..'
import { LinkGroup, LinkItem } from '../../links'

export function useAllLinksInGroupAreHidden(): (group: LinkGroup) => boolean {
  const hiddenLinks = useAppSelector((state) => state.hiddenLinks.links)

  return function allLinksInGroupAreHidden(group) {
    return group.items.every((link) => hiddenLinks.includes(link.url))
  }
}

export function useGetIsLinkHidden(): (link: LinkItem) => boolean {
  const hiddenLinks = useAppSelector((state) => state.hiddenLinks.links)

  return function getIsLinkHidden(link) {
    return hiddenLinks.includes(link.url)
  }
}

export function useHiddenLinksCount(): number {
  const hiddenLinks = useAppSelector((state) => state.hiddenLinks.links)

  const hiddenLinksCount = useMemo(() => {
    return hiddenLinks.length
  }, [hiddenLinks.length])

  return hiddenLinksCount
}
