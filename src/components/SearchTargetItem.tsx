import React, { FC, memo, useCallback } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem } from '../links'
import { getIconUrl } from '../utils/misc'

interface Props {
  title: LinkItem['title']
  icon: LinkItem['icon']
  color: LinkItem['color']
}

export const SearchTargetItem: FC<Props> = memo(function SearchTargetItem({
  title,
  icon,
  color,
}) {
  const getIcon = useCallback(() => {
    if (icon === undefined) {
      return null
    }

    const iconUrl = getIconUrl(icon)

    return (
      <span className="search-target-item__icon-container" style={{ color }}>
        <ReactSVG src={iconUrl} className="search-target-item__icon" />
      </span>
    )
  }, [color, icon])

  return (
    <div className="search-target-item">
      Search on {getIcon()} {title}:
    </div>
  )
})
