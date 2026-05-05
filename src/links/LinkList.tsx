import { type FC } from 'react'
import { Link } from './Link.tsx'
import type { LinkItem } from './links.ts'

type Props = {
  links: LinkItem[] | undefined
  areLinksHidden?: boolean
}

export const LinkList: FC<Props> = ({ links, areLinksHidden = false }) => {
  if (links === undefined) {
    return null
  }

  return links.map((link) => (
    <Link key={link.url} link={link} isHidden={areLinksHidden} />
  ))
}
