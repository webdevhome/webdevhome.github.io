import { persistentAtom } from '@nanostores/persistent'
import { computed, readonlyType } from 'nanostores'
import { isStringArray } from '../utils/isStringArray.ts'
import { type StoreObject } from '../utils/nanostores.ts'
import { allLinks, categoryToLinksMap, type LinkItem } from './links.ts'

export type LinkVisibilityState = 'visible' | 'hidden'

const $hiddenLinks = persistentAtom('wdh:hidden-items', new Set<LinkItem>(), {
  encode(links) {
    const ids = links
      .values()
      .map((link) => link.id)
      .toArray()

    return JSON.stringify(ids)
  },
  decode(value) {
    const ids = JSON.parse(value)
    if (!isStringArray(ids)) {
      throw new TypeError('Value read from storage is not a string array.')
    }
    const links = allLinks.values().filter((link) => ids.includes(link.id))
    return new Set(links)
  },
})

const $hiddenLinksCount = computed([$hiddenLinks], (links) => links.size)

const $areAnyLinksHidden = computed([$hiddenLinksCount], (count) => count > 0)

const $visibleLinks = computed([$hiddenLinks], (hiddenLinks) =>
  allLinks.difference(hiddenLinks),
)

const $visibleLinksCount = computed([$visibleLinks], (links) => links.size)

const $visibleCategories = computed([$hiddenLinks], (hiddenLinks) => {
  return new Set(
    categoryToLinksMap
      .entries()
      .filter(([, links]) => links.some((l) => !hiddenLinks.has(l)))
      .map(([category]) => category),
  )
})

const $categoriesWithHiddenLinks = computed([$hiddenLinks], (hiddenLinks) => {
  return new Set(
    categoryToLinksMap
      .entries()
      .filter(([, links]) => {
        return !hiddenLinks.isDisjointFrom(new Set(links))
      })
      .map(([category]) => category),
  )
})

export const hiddenLinksStore = {
  $hiddenLinks: readonlyType($hiddenLinks),

  $hiddenLinksCount,
  $visibleLinks,
  $visibleLinksCount,
  $visibleCategories,
  $areAnyLinksHidden,
  $categoriesWithHiddenLinks,

  set(links: Iterable<LinkItem>) {
    $hiddenLinks.set(new Set(links))
  },

  toggle(link: LinkItem) {
    $hiddenLinks.set($hiddenLinks.get().symmetricDifference(new Set([link])))
  },

  toggleMultiple(links: Iterable<LinkItem>) {
    const hiddenLinks = $hiddenLinks.get()
    const linksToToggle = new Set(links)

    if (hiddenLinks.isDisjointFrom(linksToToggle)) {
      // If none of the links in `links` is already hidden
      // then hide all of them.
      $hiddenLinks.set(hiddenLinks.union(linksToToggle))
    } else {
      // If at least one link in `links` is already hidden
      // then unhide all links in `links`.
      $hiddenLinks.set(hiddenLinks.difference(linksToToggle))
    }
  },

  showAll() {
    $hiddenLinks.set(new Set())
  },

  hideAll() {
    $hiddenLinks.set(new Set<LinkItem>(allLinks))
  },
} satisfies StoreObject
