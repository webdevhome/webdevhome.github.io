import { type JSX } from 'react'
import linksData from '../links.json' with { type: 'json' }

export type LinkItem = {
  title: string
  url: string
  description?: string
  icon?: string
  color?: string
  iconComp?: JSX.Element
  searchUrl?: string
}

export type SearchTarget = LinkItem & Required<Pick<LinkItem, 'searchUrl'>>

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

const linksJson = linksData as Links

export const linkGroups: LinkGroup[] = linksJson.items

export const allLinks: Set<LinkItem> = new Set(
  linksJson.items.flatMap((group) => group.items),
)

export const linkToGroupMap = new Map<LinkItem, LinkGroup>(
  linksJson.items.flatMap((g) => {
    return g.items.map((l) => [l, g])
  }),
)

export function linkHasSearchUrl(link: LinkItem): link is SearchTarget {
  return typeof link.searchUrl === 'string'
}
