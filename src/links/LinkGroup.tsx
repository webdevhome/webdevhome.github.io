import classNames from 'classnames'
import { CopyCheckIcon, CopyIcon } from 'lucide-react'
import { type FC, useState } from 'react'
import { type LinkGroup as ILinkGroup } from './links.ts'
import { appMode, useIsAppMode } from '../app/appModeStore.ts'
import { slugify } from '../utils/slugify.ts'
import {
  allUrlsAreHidden,
  toggleUrls,
  useHiddenUrls,
} from './hiddenUrlsStore.ts'
import { Link } from './Link.tsx'
import { LinkGroupButton } from './LinkGroupButton.tsx'

type Props = {
  group: ILinkGroup
}

export const LinkGroup: FC<Props> = ({ group }) => {
  const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const isAppMode = useIsAppMode()

  const hiddenUrls = useHiddenUrls()

  const visibleLinks = group.items.filter((i) => !hiddenUrls.includes(i.url))

  const hiddenLinks = group.items.filter((i) => hiddenUrls.includes(i.url))

  const isGroupHidden = allUrlsAreHidden(group.items.map((i) => i.url))

  const hiddenLinksCount = hiddenLinks.length
  const pluralizedLink = hiddenLinksCount === 1 ? 'link' : 'links'
  const hideShowVerb = showHiddenLinks ? 'Hide' : 'Show'
  const showHiddenLinksButtonLabel = `${hideShowVerb} ${hiddenLinksCount} hidden ${pluralizedLink}`

  function handleShowHiddenLinksClick(): void {
    setShowHiddenLinks(!showHiddenLinks)
  }

  if (isGroupHidden && !isAppMode(appMode.customize)) {
    return null
  }

  return (
    <div id={slugify(group.name)} className="scroll-mt-2">
      <div className="mb-2 flex gap-x-1">
        <div
          className={classNames(
            'flex-auto',
            'px-4 py-2',
            `bg-${group.color ?? 'gray'}-100 dark:bg-${group.color ?? 'gray'}-600`,
            'text-center leading-tight font-bold tracking-wider uppercase',
            `text-${group.color ?? 'gray'}-800 dark:text-${group.color ?? 'gray'}-50`,
            'rounded-lg',
            'shadow-sm',
          )}
        >
          {group.name}
        </div>

        {isAppMode(appMode.customize) ? (
          <button
            className={classNames(
              'grid items-center justify-center',
              'px-2',
              'hover:bg-black/10 active:bg-black/15',
              'dark:hover:bg-white/10 dark:active:bg-white/15',
              {
                'text-brand-600 hover:text-brand-800': !isGroupHidden,
                'dark:text-brand-300 hover:dark:text-brand-100': !isGroupHidden,
                'text-brand-600/50 hover:text-brand-700/75': isGroupHidden,
                'dark:text-brand-300/50 dark:hover:text-brand-200/75':
                  isGroupHidden,
              },
              'rounded',
            )}
            onClick={() => toggleUrls(group.items.map((link) => link.url))}
          >
            {isGroupHidden ? <CopyIcon /> : <CopyCheckIcon />}
          </button>
        ) : null}
      </div>

      <div className="grid gap-y-px">
        {visibleLinks.map((link) => (
          <Link
            key={link.url}
            link={link}
            searchable={link.searchUrl !== undefined}
          />
        ))}

        {hiddenLinks.length > 0 ? (
          <LinkGroupButton onClick={handleShowHiddenLinksClick}>
            {showHiddenLinksButtonLabel}
          </LinkGroupButton>
        ) : null}

        {showHiddenLinks ? (
          <div>
            {hiddenLinks.map((link) => (
              <Link
                key={link.url}
                link={link}
                visible={!isAppMode(appMode.customize)}
                searchable={link.searchUrl !== undefined}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
