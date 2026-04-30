import { type JSX } from 'react'
import linksData from '../links.json' with { type: 'json' }
import { type OptionalExceptFor } from '../utilityTypes.ts'

export type LinkItem = {
  title: string
  url: string
  description?: string
  icon?: string
  color?: string
  iconComp?: JSX.Element
  searchUrl?: string
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

export const linkToGroupMap = new Map<LinkItem, LinkGroup>(
  links.items.flatMap((g) => {
    return g.items.map((l) => [l, g])
  }),
)
