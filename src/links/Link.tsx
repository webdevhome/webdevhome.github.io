import classNames from 'classnames'
import { EyeIcon, EyeOffIcon, SearchIcon } from 'lucide-react'
import { type FC, type MouseEvent } from 'react'
import { ReactSVG } from 'react-svg'
import { appMode, setAppMode, useIsAppMode } from '../app/appModeStore.ts'
import { setSearchTarget } from '../search/useSearch.ts'
import { DefaultIcon } from '../ui/DefaultIcon.tsx'
import { Kbd } from '../ui/Kbd.tsx'
import { getIconUrl } from '../utils/getIconUrl.ts'
import { toggleUrl } from './hiddenUrlsStore.ts'
import { LinkAction } from './LinkAction.tsx'
import { linkToGroupMap, type LinkItem, type SearchTarget } from './links.ts'
import { useShowDescriptions } from './useLinkDescriptions.ts'
import { useOpenLinksInNewTab } from './useOpenLinksInNewTab.ts'

type Props = {
  link: LinkItem
  searchable?: boolean
  visible?: boolean
  focus?: boolean
  showGroup?: boolean
}

export const Link: FC<Props> = ({
  link,
  searchable = false,
  visible = true,
  focus = false,
  showGroup = false,
}) => {
  const openLinksInNewTab = useOpenLinksInNewTab()
  const isAppMode = useIsAppMode()

  const showDescription = useShowDescriptions()

  const group = linkToGroupMap.get(link) ?? null

  const linkTitle =
    link.description === undefined
      ? link.title
      : `${link.title}: ${link.description}`

  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>): void {
    if (isAppMode(appMode.customize) || event.altKey) {
      event.preventDefault()
      toggleUrl(link.url)
    }

    if (isAppMode(appMode.search) && openLinksInNewTab) {
      setAppMode(appMode.default)
    }
  }

  function handleSearchClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    event.preventDefault()
    setAppMode(appMode.search)
    setSearchTarget(link as SearchTarget)
  }

  return (
    <a
      href={link.url}
      rel="noreferrer"
      {...(openLinksInNewTab ? { target: '_blank' } : {})}
      title={linkTitle}
      className={classNames(
        'grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto]',
        'items-center gap-x-3',
        'p-1',
        'hover:bg-black/10 active:bg-black/15',
        'dark:hover:bg-white/10 dark:active:bg-white/15',
        {
          'bg-black/10 dark:bg-white/10': focus,
          'outline-1 -outline-offset-1 outline-black/25 dark:outline-white/25':
            focus,
        },
        'focus:outline-2 focus:-outline-offset-1',
        'focus:relative focus:z-10',
        'focus:outline-gray-400',
        'rounded-lg',
        { 'cursor-default': isAppMode(appMode.customize) },
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
          color: `light-dark(${link.color ?? 'silver'}, hsl(from ${link.color ?? 'silver'} h calc(s * 0.9) calc(l * 0.5 + 10)))`,
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
          'text-base leading-4 font-semibold',
          'text-black dark:text-gray-50',
        ])}
      >
        <div>{link.title}</div>

        {showGroup && group !== null && (
          <div className="mt-0.5 flex items-center gap-1.5">
            <div
              className={classNames([
                'h-2 w-2 rounded-full',
                `bg-${group.color}-600 dark:bg-${group.color}-600`,
              ])}
            ></div>
            <div
              className={classNames([
                'text-xs opacity-70',
                `text-${group.color}-800 dark:text-${group.color}-300`,
              ])}
            >
              {group?.name ?? '-'}
            </div>
          </div>
        )}
      </div>

      <div className="-my-1 -mr-1 flex self-stretch">
        {searchable && !isAppMode(appMode.customize) ? (
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

        {isAppMode(appMode.customize) ? (
          <LinkAction
            className={classNames({
              'text-brand-600 group-hover:text-brand-800': visible,
              'dark:text-brand-300 group-hover:dark:text-brand-100': visible,
              'text-brand-600/50 group-hover:text-brand-700/75': !visible,
              'dark:text-brand-300/50 dark:group-hover:text-brand-200/75':
                !visible,
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
