import linksData from '../../links.json'

export type LinkItem = {
  title: string
  url: string
  description?: string
  icon?: string
  color?: string
  searchUrl?: string
  searchConcat?: string
}

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

export const groupedLinks: Links = {
  items: linksData.items as LinkGroup[],
}

export const allLinks = groupedLinks.items.flatMap((group) => group.items)
