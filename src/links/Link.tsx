import classNames from 'classnames'
import { type FC, type MouseEvent } from 'react'
import { setAppMode, useIsAppMode } from '../app/appModeStore.ts'
import { setSearchTarget } from '../search/search.ts'
import { toggleUrl } from './hiddenUrlsStore.ts'
import { LinkDescription } from './LinkDescription.tsx'
import { LinkGroupLabel } from './LinkGroupLabel.tsx'
import { LinkItemIcon } from './LinkItemIcon.tsx'
import { linkHasSearchUrl, linkToGroupMap, type LinkItem } from './links.ts'
import { LinkSearchButton } from './LinkSearchButton.tsx'
import { LinkVisibilityToggleButton } from './LinkVisibilityToggleButton.tsx'
import { useShowDescriptions } from './useLinkDescriptions.ts'
import { useOpenLinksInNewTab } from './useOpenLinksInNewTab.ts'

type Props = {
  link: LinkItem
  searchable?: boolean
  isHidden?: boolean
  focused?: boolean
  showGroup?: boolean
}

export const Link: FC<Props> = ({
  link,
  searchable = false,
  isHidden = false,
  focused = false,
  showGroup = false,
}) => {
  const openLinksInNewTab = useOpenLinksInNewTab()
  const showDescription = useShowDescriptions()
  const isAppMode = useIsAppMode()

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
    if (!linkHasSearchUrl(link)) return
    setSearchTarget(link)
    setAppMode('search')
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

        <LinkGroupLabel showGroup={showGroup} group={group} />
      </div>

      <div className="-my-1 -mr-1 flex self-stretch">
        <LinkSearchButton
          focused={focused}
          searchable={searchable}
          onClick={handleSearchClick}
        />

        <LinkVisibilityToggleButton isHidden={isHidden} />
      </div>

      <LinkDescription
        description={link.description}
        showDescription={showDescription}
      />
    </a>
  )
}
