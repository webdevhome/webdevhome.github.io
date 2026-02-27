import { useMemo } from 'react'
import linksData from './links.json'
import { OptionalExceptFor } from './utilityTypes'

export type LinkItem = {
  title: string
  url: string
  description?: string
  icon?: string
  color?: string
  iconComp?: JSX.Element
  searchUrl?: string
  searchConcat?: string
}

export type SearchTarget = OptionalExceptFor<
  LinkItem,
  'title' | 'url' | 'searchUrl'
>

export type TailwindColorName =
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'

export type LinkGroup = {
  name: string
  color?: TailwindColorName
  items: LinkItem[]
}

export type Links = {
  items: LinkGroup[]
}

export const links: Links = {
  items: linksData.items as LinkGroup[],
}

export const allLinks: LinkItem[] = links.items.flatMap((group) => group.items)

export function useAllLinks(): LinkItem[] {
  return useMemo(() => allLinks, [])
}

/**
 * This is a filter function for `Array.prototype.filter`. The `filter` function
 * then returns only URLs defined in `links.json`.
 *
 * @example
 * ``` ts
 * const someLinks: string[] = []
 * const filteredLinks: string[] = someLinks.filter(onlyValidLinks)
 * ```
 *
 * @param url
 *  The current URL passed from `Array.prototype.filter`.
 *
 * @returns
 *  - `true` if `url` is a valid URL defined in `links.json`.
 *  - `false` otherwise.
 */
export function onlyValidLinks(url: string): boolean {
  return allLinks.some((l) => l.url === url)
}
