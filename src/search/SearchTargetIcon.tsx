import { type FC } from 'react'
import { ReactSVG } from 'react-svg'
import type { LinkItem } from '../links/links.ts'
import { getIconUrl } from '../utils/getIconUrl.ts'
import { DefaultIcon } from '../ui/DefaultIcon.tsx'

type Props = {
  icon: LinkItem['icon']
  color: LinkItem['color']
}

export const SearchTargetIcon: FC<Props> = ({ icon, color }) => {
  if (icon === undefined) {
    return (
      <span className="mr-2 shrink-0 rounded bg-white p-1">
        <DefaultIcon />
      </span>
    )
  }

  return (
    <span
      className="mr-2 h-[31px] w-[31px] shrink-0 rounded bg-white p-1"
      style={{ color }}
    >
      <ReactSVG
        src={getIconUrl(icon)}
        className="search-target-item__icon fill-current"
      />
    </span>
  )
}
