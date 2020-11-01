import React, { memo, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem } from '../../links'
import { getIconUrl } from './getIconUrl'
import './SearchTargetItem.scss'

interface Props {
  title: LinkItem['title']
  icon: LinkItem['icon']
  color: LinkItem['color']
}

export const SearchTargetLabel = memo<Props>(function SearchTargetItem({
  title,
  icon,
  color,
}) {
  const searchTargetIcon = useMemo(() => {
    if (icon === undefined) return null

    const iconUrl = getIconUrl(icon)

    return (
      <span className="search-target-item__icon-container" style={{ color }}>
        <ReactSVG src={iconUrl} className="search-target-item__icon" />
      </span>
    )
  }, [color, icon])

  return (
    <div className="search-target-item">
      Search on {searchTargetIcon} {title}:
    </div>
  )
})
