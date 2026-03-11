import classNames from 'classnames'
import { EyeIcon, EyeOffIcon, SearchIcon } from 'lucide-react'
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
import { useOpenLinksInNewTab } from '../App/useOpenLinksInNewTab'
import { Kbd } from '../basics/Kbd'
import { DefaultIcon } from '../Icon/DefaultIcon'
import { LinkAction } from './LinkAction'

type Props = {
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
  const openLinksInNewTab = useOpenLinksInNewTab()

  const showDescription = useAppSelector(
    (state) => state.appSettings.showDescriptions,
  )

  const isCustomizeMode = useMemo(
    () => isCurrentAppMode(AppMode.customize),
    [isCurrentAppMode],
  )

  const isSearchMode = useMemo(
    () => isCurrentAppMode(AppMode.search),
    [isCurrentAppMode],
  )

  const linkTitle = useMemo(() => {
    if (link.description === undefined) {
      return link.title
    }

    return `${link.title}: ${link.description}`
  }, [link.description, link.title])

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>): void => {
      if (isCustomizeMode || event.altKey) {
        event.preventDefault()
        dispatch(toggleHiddenLink(link.url))
      }

      if (isSearchMode && openLinksInNewTab.openLinksInNewTab) {
        dispatch(setAppMode(AppMode.default))
      }
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

  if (!visible) return null

  return (
    <a
      href={link.url}
      rel="noreferrer"
      {...(openLinksInNewTab.openLinksInNewTab ? { target: '_blank' } : {})}
      title={linkTitle}
      className={classNames(
        'grid grid-cols-[auto,1fr,auto] grid-rows-[auto,auto]',
        'items-center gap-x-3',
        'p-1',
        {
          'text-gray-400 hover:text-gray-600': !visible,
          'dark:text-gray-400 dark:hover:text-gray-300': !visible,
          'text-gray-700': visible,
        },
        'hover:bg-black/10 active:bg-black/15',
        'dark:hover:bg-white/10 dark:active:bg-white/15',
        {
          'bg-black/10 dark:bg-white/10': focus,
          'outline outline-1 -outline-offset-1 outline-black/25 dark:outline-white/25':
            focus,
        },
        'focus:outline focus:outline-2 focus:-outline-offset-1',
        'focus:relative focus:z-10',
        'focus:outline-gray-400',
        'rounded-lg',
        { 'cursor-default': isCustomizeMode },
        'overflow-hidden',
        'group',
      )}
      onClick={handleLinkClick}
    >
      <div
        className={classNames(
          'grid items-center justify-center',
          'p-1',
          'bg-[linear-gradient(to_bottom_right,hsl(from_currentcolor_h_s_98%),hsl(from_currentcolor_h_s_94%))]',
          'dark:bg-[linear-gradient(to_bottom_right,hsl(from_currentcolor_h_calc(s*0.25)_90%),hsl(from_currentcolor_h_calc(s*0.25)_70%))]',
          'shadow-[0_1px_2px_rgb(from_black_r_g_b/25%),1px_1px_1px_rgb(from_white_r_g_b/50%)_inset]',
          'rounded-md',
        )}
        style={{
          color: `light-dark(${link.color}, hsl(from ${link.color} h calc(s * 0.9) calc(l * 0.5 + 10)))`,
        }}
      >
        {link.icon === undefined ? (
          <DefaultIcon />
        ) : (
          <ReactSVG
            src={getIconUrl(link.icon)}
            className="h-[27px] w-[27px] fill-current"
          />
        )}
      </div>

      <div
        className={classNames([
          'text-base font-semibold leading-4',
          {
            'text-black dark:text-gray-50': visible,
            'line-through': !visible,
          },
        ])}
      >
        {link.title}
      </div>

      <div className="-my-1 -mr-1 flex self-stretch">
        {searchable && !isCustomizeMode ? (
          <>
            {focus ? (
              <div className="mr-2 self-center">
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
              <SearchIcon className="opacity-40 group-hover:opacity-100" />
            </LinkAction>
          </>
        ) : null}

        {isCustomizeMode ? (
          <LinkAction
            className={classNames({
              'text-brand-700 dark:text-brand-300': visible,
            })}
          >
            {visible ? <EyeIcon /> : <EyeOffIcon />}
          </LinkAction>
        ) : null}
      </div>

      {showDescription && link.description !== undefined ? (
        <div
          className={classNames('col-start-2', 'py-1', 'text-sm leading-4', {
            'text-gray-500 dark:text-gray-400': visible,
          })}
        >
          {link.description}
        </div>
      ) : null}
    </a>
  )
}
