import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { computed } from 'nanostores'
import { jsonEncoder } from '../utils/nanostores.ts'
import { allLinks, links, type LinkGroup, type LinkItem } from './links.ts'

const $hiddenUrls = persistentAtom<string[]>(
  'wdh:hidden-items',
  [],
  jsonEncoder,
)

export const $allLinksByVisibility = computed($hiddenUrls, (hiddenUrls) => {
  return Object.groupBy(allLinks, (link) => {
    return hiddenUrls.includes(link.url) ? 'hidden' : 'visible'
  })
})

const $hiddenUrlsCount = computed($hiddenUrls, (urls) => urls.length)

export function setHiddenUrls(urls: LinkItem['url'][]): void {
  $hiddenUrls.set(urls)
}

export function toggleUrl(url: LinkItem['url']): void {
  const oldState = $hiddenUrls.get()

  if (oldState.includes(url)) {
    $hiddenUrls.set(oldState.filter((u) => u !== url))
  } else {
    $hiddenUrls.set([...oldState, url])
  }
}

export function toggleUrls(urls: LinkItem['url'][]): void {
  const oldState = $hiddenUrls.get()

  if (urls.some((u) => oldState.includes(u))) {
    $hiddenUrls.set(oldState.filter((u) => !urls.includes(u)))
  } else {
    const urlsToAdd = urls.filter((u) => !oldState.includes(u))
    $hiddenUrls.set([...oldState, ...urlsToAdd])
  }
}

export function showAllUrls(): void {
  $hiddenUrls.set([])
}

export function hideAllUrls(): void {
  $hiddenUrls.set(allLinks.map((l) => l.url))
}

export function useHiddenUrls(): LinkItem['url'][] {
  return useStore($hiddenUrls)
}

export function useVisibleLinkGroups(): LinkGroup[] {
  const hiddenUrls = useStore($hiddenUrls)

  return links.items.filter((group) => {
    return group.items.some((link) => !hiddenUrls.includes(link.url))
  })
}

export function useHiddenUrlsCount(): number {
  return useStore($hiddenUrlsCount)
}

export function useAllUrlsAreHidden(urls: LinkItem['url'][]): boolean {
  const hiddenUrls = useStore($hiddenUrls)

  return urls.every((u) => hiddenUrls.includes(u))
}
