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
        className="mr-2 p-1 w-[31px] h-[31px] bg-white rounded shrink-0"
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
        'flex flex-col gap-y-4 items-start sm:flex-row sm:items-center',
        'sm:px-8',
        'text-xl',
        'text-gray-700 dark:text-gray-100',
      )}
    >
      <div
        onClick={handleBackClick}
        className={classNames(
          'flex items-center',
          'mr-4 px-2 py-1',
          'bg-gray-100 hover:bg-gray-200 active:bg-gray-300',
          'dark:bg-gray-600 dark:hover:bg-gray-500 dark:active:bg-gray-400',
          'rounded',
          'cursor-default select-none',
        )}
      >
        <span className="mr-1">
          <MdiIcon path={mdiArrowLeft} />
        </span>
        Back
      </div>

      <div className="flex items-center flex-wrap gap-y-2">
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
