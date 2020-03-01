import React, { FC, memo } from 'react'
import { LinkItem } from '../links'
import { ReactSVG } from 'react-svg'

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

function getIconUrl (icon: string): string {
  return `${process.env.REACT_APP_PUBLIC_URL ?? ''}/simple-icons/${icon}.svg`
}
