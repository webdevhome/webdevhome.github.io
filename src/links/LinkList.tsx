import { type FC } from 'react'
import { Link } from './Link.tsx'
import type { LinkItem } from './links.ts'

type Props = {
  links: LinkItem[]
  areLinksHidden?: boolean
}

export const LinkList: FC<Props> = ({ links, areLinksHidden = false }) => {
  return links.map((link) => (
    <Link key={link.url} link={link} isHidden={areLinksHidden} />
  ))
}
