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
        className="mx-2 p-1 w-[31px] h-[31px] bg-white rounded"
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
        'col-start-2 flex items-center',
        'px-8',
        'text-xl',
        'text-gray-700 dark:text-gray-100',
      )}
    >
      <span
        onClick={handleBackClick}
        className={classNames(
          'flex items-center',
          'mr-4 px-2 py-1',
          'hover:bg-gray-100 dark:hover:bg-gray-500',
          'active:bg-gray-200 dark:hover:bg-gray-400',
          'rounded',
          'cursor-default',
        )}
      >
        <span className="mr-1">
          <MdiIcon path={mdiArrowLeft} />
        </span>
        Back
      </span>
      Search on {searchTargetIcon}
      <span className="text-brand-600 dark:text-brand-300">{title}</span>:
    </div>
  )
}
