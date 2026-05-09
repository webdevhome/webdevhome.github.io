import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { type FC, type MouseEvent } from 'react'
import { appModeStore } from '../app-mode/appModeStore.ts'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { hiddenLinksStore } from './hiddenLinksStore.ts'
import { LinkDescription } from './LinkDescription.tsx'
import { linkDescriptionsStore } from './linkDescriptions.ts'
import { LinkGroupLabel } from './LinkGroupLabel.tsx'
import { LinkItemIcon } from './LinkItemIcon.tsx'
import {
  linkIsSearchTarget,
  linksToCategoryMap,
  type LinkItem,
} from './links.ts'
import { LinkSearchButton } from './LinkSearchButton.tsx'
import { LinkVisibilityToggleButton } from './LinkVisibilityToggleButton.tsx'
import { openLinksInNewTabStore } from './openLinksInNewTab.ts'

type Props = {
  link: LinkItem
  focused?: boolean
  showCategory?: boolean
}

export const Link: FC<Props> = ({
  link,
  focused = false,
  showCategory = false,
}) => {
  const openLinksInNewTab = useStore(openLinksInNewTabStore.$setting)
  const showDescription = useStore(linkDescriptionsStore.$show)
  const isAppMode = useIsAppMode()
  const hiddenLinks = useStore(hiddenLinksStore.$hiddenLinks)

  const isHidden = hiddenLinks.has(link)
  const category = linksToCategoryMap.get(link) ?? null

  const linkTitle = (() => {
    if (link.description === undefined) {
      return link.title
    }
    return `${link.title}: ${link.description}`
  })()

  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    if (isAppMode('customize') || event.altKey) {
      event.preventDefault()
      hiddenLinksStore.toggle(link)
    }

    if (isAppMode('search') && openLinksInNewTab) {
      appModeStore.exitSearchMode()
    }
  }

  function handleSearchClick(event: MouseEvent<HTMLButtonElement>) {
    // Prevents click to be recognized as regular click on link
    // and therefore exiting the search mode.
    event.stopPropagation()
    // Prevents linked website from opening.
    event.preventDefault()

    if (!linkIsSearchTarget(link)) return
    appModeStore.enterOnSiteSearchMode(link)
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

      <div>
        <div className="text-brand-950 text-base leading-4 font-semibold dark:text-white">
          {link.title}
        </div>

        <LinkGroupLabel showGroup={showCategory} category={category} />
      </div>

      <div className="-my-1 -mr-1 flex self-stretch">
        {link.searchUrl !== undefined && (
          <LinkSearchButton focused={focused} onClick={handleSearchClick} />
        )}

        <LinkVisibilityToggleButton isHidden={isHidden} />
      </div>

      <LinkDescription
        description={link.description}
        showDescription={showDescription}
      />
    </a>
  )
}
