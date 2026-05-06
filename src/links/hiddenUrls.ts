import { persistentAtom } from '@nanostores/persistent'
import { useStore } from '@nanostores/react'
import { computed } from 'nanostores'
import { makeSetEncoder, updateStore } from '../utils/nanostores.ts'
import {
  categoryToLinksMap,
  linksSet,
  linksToCategoryMap,
  type Category,
  type LinkItem,
} from './links.ts'

export type LinkVisibilityState = 'visible' | 'hidden'

const $hiddenUrls = persistentAtom<Set<LinkItem['url']>>(
  'wdh:hidden-items',
  new Set(),
  makeSetEncoder(),
)

export function useHiddenUrls(): Set<LinkItem['url']> {
  return useStore($hiddenUrls)
}

export function setHiddenUrls(urls: LinkItem['url'][]) {
  $hiddenUrls.set(new Set(urls))
}

export function toggleUrl(url: LinkItem['url']) {
  const oldState = $hiddenUrls.get()

  if (oldState.has(url)) {
    updateStore($hiddenUrls, (urls) => urls.difference(new Set([url])))
  } else {
    updateStore($hiddenUrls, (urls) => new Set([...urls, url]))
  }
}

export function toggleUrls(urls: LinkItem['url'][]) {
  const hiddenUrls = $hiddenUrls.get()
  const urlsToToggle = new Set(urls)

  if (hiddenUrls.isDisjointFrom(urlsToToggle)) {
    // If none of the URLs in `urls` is already hidden
    // then hide all of them.
    $hiddenUrls.set(hiddenUrls.union(urlsToToggle))
  } else {
    // If at least one URL in `urls` is already hidden
    // then unhide all URLs in `urls`.
    $hiddenUrls.set(hiddenUrls.difference(urlsToToggle))
  }
}

export function showAllUrls() {
  $hiddenUrls.set(new Set())
}

export function hideAllUrls() {
  const allUrls = linksSet.values().map((link) => link.url)
  $hiddenUrls.set(new Set<LinkItem['url']>(allUrls))
}

export function useIsUrlHidden(): (url: LinkItem['url']) => boolean {
  const hiddenUrls = useStore($hiddenUrls)

  return (url) => hiddenUrls.has(url)
}

export function useAreAllUrlsHidden(urls: LinkItem['url'][]): boolean {
  const hiddenUrls = useStore($hiddenUrls)

  return urls.every((u) => hiddenUrls.has(u))
}

export const $hiddenUrlsCount = computed($hiddenUrls, (urls) => urls.size)

type LinksByVisibility = Partial<Record<LinkVisibilityState, LinkItem[]>>

export const $allLinksByVisibility = computed(
  $hiddenUrls,
  (hiddenUrls): LinksByVisibility => {
    return Object.groupBy(
      linksToCategoryMap.keys(),
      (link): LinkVisibilityState => {
        return hiddenUrls.has(link.url) ? 'hidden' : 'visible'
      },
    )
  },
)

export const $visibleLinkGroups = computed(
  [$hiddenUrls],
  (hiddenUrls): Category[] => {
    return categoryToLinksMap
      .entries()
      .filter(([, links]) => {
        return links.some((l) => !hiddenUrls.has(l.url))
      })
      .map(([category]) => category)
      .toArray()
  },
)
