import classNames from 'classnames'
import { type FC, type MouseEvent } from 'react'
import {
  enterOnSiteSearchMode,
  exitSearchMode,
  useIsAppMode,
} from '../app/appMode.ts'
import { toggleUrl, useIsUrlHidden } from './hiddenUrls.ts'
import { LinkDescription } from './LinkDescription.tsx'
import { useShowDescriptions } from './linkDescriptions.ts'
import { LinkGroupLabel } from './LinkGroupLabel.tsx'
import { LinkItemIcon } from './LinkItemIcon.tsx'
import {
  linkIsSearchTarget,
  linksToCategoryMap,
  type LinkItem,
} from './links.ts'
import { LinkSearchButton } from './LinkSearchButton.tsx'
import { LinkVisibilityToggleButton } from './LinkVisibilityToggleButton.tsx'
import { useOpenLinksInNewTab } from './openLinksInNewTab.ts'

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
  const openLinksInNewTab = useOpenLinksInNewTab()
  const showDescription = useShowDescriptions()
  const isAppMode = useIsAppMode()
  const isUrlHidden = useIsUrlHidden()

  const isHidden = isUrlHidden(link.url)
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
      toggleUrl(link.url)
    }

    if (isAppMode('search') && openLinksInNewTab) {
      exitSearchMode()
    }
  }

  function handleSearchClick(event: MouseEvent<HTMLButtonElement>) {
    // Prevents click to be recognized as regular click on link
    // and therefore exiting the search mode.
    event.stopPropagation()
    // Prevents linked website from opening.
    event.preventDefault()

    if (!linkIsSearchTarget(link)) return
    enterOnSiteSearchMode(link)
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
        <div
          className={classNames([
            'text-base leading-4 font-semibold',
            'text-brand-950 dark:text-white',
          ])}
        >
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
