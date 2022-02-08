import {
  mdiCheckboxBlankOutline,
  mdiCheckboxOutline,
  mdiMagnify,
} from '@mdi/js'
import classNames from 'classnames'
import { FC, MouseEvent, useCallback, useMemo } from 'react'
import { ReactSVG } from 'react-svg'
import { LinkItem, SearchTarget } from '../../links'
import { useAppDispatch, useAppSelector } from '../../stores'
import { setAppMode } from '../../stores/appMode/appModeActions'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { toggleHiddenLink } from '../../stores/hiddenLinks/hiddenLinksActions'
import { setSearchTarget } from '../../stores/search/searchActions'
import { getIconUrl } from '../../utils/getIconUrl'
import { Kbd } from '../basics/Kbd'
import { DefaultIcon } from '../Icon/DefaultIcon'
import { MdiIcon } from '../Icon/MdiIcon'
import { LinkAction } from './LinkAction'

interface Props {
  link: LinkItem
  searchable?: boolean
  visible?: boolean
  focus?: boolean
}

export const Link: FC<Props> = ({
  link,
  searchable = false,
  visible = true,
  focus = false,
}) => {
  const dispatch = useAppDispatch()
  const isCurrentAppMode = useIsCurrentAppMode()

  const showDescription = useAppSelector(
    (state) => state.appSettings.showDescriptions,
  )

  const isCustomizeMode = useMemo(
    () => isCurrentAppMode(AppMode.customize),
    [isCurrentAppMode],
  )

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>): void => {
      if (!isCustomizeMode) return

      event.preventDefault()
      dispatch(toggleHiddenLink(link.url))
    },
    [dispatch, isCustomizeMode, link.url],
  )

  const handleSearchClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()
      event.preventDefault()
      dispatch(setAppMode(AppMode.search))
      dispatch(setSearchTarget(link as SearchTarget))
    },
    [dispatch, link],
  )

  if (!isCustomizeMode && !visible) return null

  return (
    <a
      href={link.url}
      rel="noreferrer"
      className={classNames(
        'grid grid-cols-[auto,1fr,auto] grid-rows-[auto,auto]',
        'items-center gap-x-2',
        'p-1',
        {
          'text-gray-400 hover:text-gray-600': !visible,
          'dark:text-gray-400 dark:hover:text-gray-300': !visible,
          'text-gray-700': visible,
        },
        'hover:bg-gray-200 active:bg-gray-300',
        'dark:hover:bg-gray-600 dark:active:bg-gray-500',
        {
          'bg-gray-100 dark:bg-gray-500': focus,
          'outline outline-1 outline-offset-0 outline-gray-400': focus,
        },
        'focus:outline focus:outline-1 focus:outline-offset-0',
        'focus:outline-gray-400',
        'rounded-md',
        { 'cursor-default': isCustomizeMode },
        'overflow-hidden',
      )}
      onClick={handleLinkClick}
    >
      <div
        className={classNames(
          'grid items-center justify-center',
          'p-1',
          'bg-white',
          'rounded',
        )}
        style={{ color: link.color }}
      >
        {link.icon !== undefined ? (
          <ReactSVG
            src={getIconUrl(link.icon)}
            className={classNames('w-[27px] h-[27px]')}
          />
        ) : (
          <DefaultIcon />
        )}
      </div>

      <div
        className={classNames({
          'text-black dark:text-gray-50': visible,
          'line-through': !visible,
        })}
      >
        {link.title}
      </div>

      <div className="flex self-stretch -my-1 -mr-1">
        {searchable && !isCustomizeMode ? (
          <>
            {focus ? (
              <div className="self-center mr-2">
                <span className="flex items-center justify-center">
                  <Kbd>Tab</Kbd>
                </span>
              </div>
            ) : null}

            <LinkAction
              className="self-stretch dark:text-gray-50"
              hasHover
              onClick={handleSearchClick}
            >
              <MdiIcon path={mdiMagnify} />
            </LinkAction>
          </>
        ) : null}

        {isCustomizeMode ? (
          <LinkAction
            className={classNames({
              'text-brand-700 dark:text-brand-300': visible,
            })}
          >
            <MdiIcon
              path={visible ? mdiCheckboxOutline : mdiCheckboxBlankOutline}
            />
          </LinkAction>
        ) : null}
      </div>

      {showDescription && link.description !== undefined ? (
        <div
          className={classNames('col-start-2', 'pb-1', 'text-sm', {
            'text-gray-500 dark:text-gray-300': visible,
          })}
        >
          {link.description}
        </div>
      ) : null}
    </a>
  )
}
