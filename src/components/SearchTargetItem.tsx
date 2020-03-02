import React, { FC, memo } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem } from '../links'
import { getIconUrl } from '../utils/misc'

interface SearchTargetItemProps {
  title: LinkItem['title']
  icon: LinkItem['icon']
  color: LinkItem['color']
}

export const SearchTargetItem: FC<SearchTargetItemProps> = memo(
  function SearchTargetItem ({ title, icon, color }) {
    return (
      <div className="search-target-item">
        Search on {icon !== undefined ? (
          <span
            className="search-target-item__icon-container"
            style={{ color }}
          >
            <ReactSVG
              src={getIconUrl(icon)}
              className="search-target-item__icon"
            />
          </span>
        ) : null} {title}:
      </div>
    )
  }
)
