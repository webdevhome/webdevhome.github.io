import classNames from 'classnames'
import { EyeIcon, EyeOffIcon, SearchIcon } from 'lucide-react'
import { type FC, type MouseEvent } from 'react'
import { setAppMode, useIsAppMode } from '../app/appModeStore.ts'
import { setSearchTarget } from '../search/search.ts'
import { Kbd } from '../ui/Kbd.tsx'
import { toggleUrl } from './hiddenUrlsStore.ts'
import { LinkAction } from './LinkAction.tsx'
import { LinkItemIcon } from './LinkItemIcon.tsx'
import { linkToGroupMap, type LinkItem, type SearchTarget } from './links.ts'
import { useShowDescriptions } from './useLinkDescriptions.ts'
import { useOpenLinksInNewTab } from './useOpenLinksInNewTab.ts'

type Props = {
  link: LinkItem
  searchable?: boolean
  visible?: boolean
  focused?: boolean
  showGroup?: boolean
}

export const Link: FC<Props> = ({
  link,
  searchable = false,
  visible = true,
  focused = false,
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
    if (isAppMode('customize') || event.altKey) {
      event.preventDefault()
      toggleUrl(link.url)
    }

    if (isAppMode('search') && openLinksInNewTab) {
      setAppMode('default')
    }
  }

  function handleSearchClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    event.preventDefault()
    setAppMode('search')
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
          'bg-black/10 dark:bg-white/10': focused,
          'outline-1 -outline-offset-1 outline-black/25 dark:outline-white/25':
            focused,
        },
        'focus:outline-2 focus:-outline-offset-1',
        'focus:relative focus:z-10',
        'focus:outline-gray-400',
        'rounded-lg',
        { 'cursor-default': isAppMode('customize') },
        'overflow-hidden',
        'group',
      )}
      onClick={handleLinkClick}
    >
      <LinkItemIcon icon={link.icon} color={link.color} />

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
        {searchable && !isAppMode('customize') ? (
          <>
            {focused ? (
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

        {isAppMode('customize') ? (
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
