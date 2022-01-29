import classNames from 'classnames'
import React, { memo, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem } from '../../links'
import { getIconUrl } from '../../utils/getIconUrl'

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
    if (icon === undefined) {
      return <span className="w-2" />
    }

    const iconUrl = getIconUrl(icon)

    return (
      <span
        className="mx-2 p-1 w-[31px] h-[31px] bg-white rounded"
        style={{ color }}
      >
        <ReactSVG src={iconUrl} className="search-target-item__icon" />
      </span>
    )
  }, [color, icon])

  return (
    <div
      className={classNames(
        'col-start-2 flex items-center',
        'px-8',
        'text-xl',
        'text-gray-700 dark:text-gray-100',
      )}
    >
      Search on {searchTargetIcon}
      <span className="text-brand-600 dark:text-brand-300">{title}</span>:
    </div>
  )
})
