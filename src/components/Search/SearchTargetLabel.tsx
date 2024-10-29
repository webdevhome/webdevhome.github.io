import { mdiArrowLeft } from '@mdi/js'
import classNames from 'classnames'
import { FC, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem } from '../../links'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode } from '../../stores/appMode/appModeActions'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { setSearchTarget } from '../../stores/search/searchActions'
import { getIconUrl } from '../../utils/getIconUrl'
import { MdiIcon } from '../Icon/MdiIcon'

interface Props {
  title: LinkItem['title']
  icon: LinkItem['icon']
  color: LinkItem['color']
}

export const SearchTargetLabel: FC<Props> = ({ title, icon, color }) => {
  const dispatch = useAppDispatch()

  const searchTerm = useAppSelector((state) => state.search.searchTerm)

  const searchTargetIcon = useMemo(() => {
    if (icon === undefined) {
      return <span className="w-2" />
    }

    const iconUrl = getIconUrl(icon)

    return (
      <span
        className="mr-2 h-[31px] w-[31px] shrink-0 rounded bg-white p-1"
        style={{ color }}
      >
        <ReactSVG src={iconUrl} className="search-target-item__icon" />
      </span>
    )
  }, [color, icon])

  function handleBackClick(): void {
    dispatch(setSearchTarget(null))

    if (searchTerm === '') {
      dispatch(setAppMode(AppMode.default))
    }
  }

  return (
    <div
      className={classNames(
        'flex flex-col items-start gap-y-4 sm:flex-row sm:items-center',
        'sm:px-8',
        'text-base',
        'text-gray-700 dark:text-gray-100',
      )}
    >
      <div
        onClick={handleBackClick}
        className={classNames(
          'flex items-center',
          'mr-4 px-2 py-1',
          'bg-black/10 hover:bg-black/20 active:bg-black/25',
          'dark:bg-white/15 dark:hover:bg-white/25 dark:active:bg-white/30',
          'rounded',
          'cursor-default select-none',
        )}
      >
        <span className="mr-1">
          <MdiIcon path={mdiArrowLeft} />
        </span>
        Back
      </div>

      <div className="flex flex-wrap items-center gap-y-2">
        <span className="mr-2">Search on</span>
        <span className="flex items-center">
          {searchTargetIcon}
          <span>
            <span className="text-brand-600 dark:text-brand-300">{title}</span>:
          </span>
        </span>
      </div>
    </div>
  )
}
