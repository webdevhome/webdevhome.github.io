import {
  mdiCheckboxMultipleBlankOutline,
  mdiCheckboxMultipleOutline,
} from '@mdi/js'
import classNames from 'classnames'
import { FC, useCallback, useMemo, useState } from 'react'
import { LinkGroup as ILinkGroup, LinkItem } from '../../links'
import { useAppDispatch } from '../../stores'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { toggleHiddenLinksGroup } from '../../stores/hiddenLinks/hiddenLinksActions'
import {
  useAllLinksInGroupAreHidden,
  useGetIsLinkHidden,
} from '../../stores/hiddenLinks/hiddenLinksHooks'
import { slugify } from '../../utils/slugify'
import { MdiIcon } from '../Icon/MdiIcon'
import { Link } from './Link'
import { LinkGroupButton } from './LinkGroupButton'

interface Props {
  group: ILinkGroup
}

export const LinkGroup: FC<Props> = ({ group }) => {
  const allLinksInGroupAreHidden = useAllLinksInGroupAreHidden()
  const isCurrentAppMode = useIsCurrentAppMode()
  const getIsLinkHidden = useGetIsLinkHidden()
  const dispatch = useAppDispatch()

  const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const hiddenLinks = useMemo(() => {
    return group.items.filter((item) => getIsLinkHidden(item))
  }, [group.items, getIsLinkHidden])

  const allGroupLinksAreHidden = useMemo(
    () => allLinksInGroupAreHidden(group),
    [allLinksInGroupAreHidden, group],
  )

  const handleToggleGroupClick = useCallback(
    (...items: LinkItem[]): void => {
      dispatch(toggleHiddenLinksGroup(items))
    },
    [dispatch],
  )

  const noVisibleLinksInGroup = useMemo(() => {
    return allLinksInGroupAreHidden(group)
  }, [allLinksInGroupAreHidden, group])

  const showHiddenLinksButtonLabel = useMemo(() => {
    const hiddenLinksCount = hiddenLinks.length
    const isSingular = hiddenLinksCount === 1

    return showHiddenLinks
      ? `Hide ${hiddenLinksCount} hidden ${isSingular ? 'link' : 'links'}`
      : `Show ${hiddenLinksCount} hidden ${isSingular ? 'link' : 'links'}`
  }, [hiddenLinks.length, showHiddenLinks])

  function handleShowHiddenLinksClick(): void {
    setShowHiddenLinks(!showHiddenLinks)
  }

  if (noVisibleLinksInGroup && !isCurrentAppMode(AppMode.customize)) {
    return null
  }

  return (
    <div
      id={slugify(group.name)}
      className="scroll-mt-32 md:scroll-mt-28 lg:scroll-mt-20"
    >
      <div className="mb-2 flex gap-x-1">
        <div
          className={classNames(
            'flex-auto',
            'px-4 py-2',
            `bg-${group.color ?? 'gray'}-100 dark:bg-${group.color ?? 'gray'}-600`,
            'text-center font-semibold uppercase tracking-wider',
            `text-${group.color ?? 'gray'}-800 dark:text-${group.color ?? 'gray'}-50`,
            'rounded-md',
          )}
        >
          {group.name}
        </div>

        {isCurrentAppMode(AppMode.customize) ? (
          <div
            className={classNames(
              'grid items-center justify-center',
              'px-2',
              'hover:bg-gray-200 active:bg-gray-300',
              'dark:hover:bg-gray-600 dark:active:bg-gray-500',
              {
                'text-brand-700 dark:text-brand-300': !allGroupLinksAreHidden,
                'text-gray-400 hover:text-gray-500 active:text-gray-600':
                  allGroupLinksAreHidden,
                'dark:text-gray-400 dark:hover:text-gray-300':
                  allGroupLinksAreHidden,
              },
              'rounded',
            )}
            onClick={() => handleToggleGroupClick(...group.items)}
          >
            {allGroupLinksAreHidden ? (
              <MdiIcon path={mdiCheckboxMultipleBlankOutline} />
            ) : (
              <MdiIcon path={mdiCheckboxMultipleOutline} />
            )}
          </div>
        ) : null}
      </div>

      <div className="grid gap-y-[1px]">
        {group.items.map((link) => (
          <Link
            key={link.url}
            link={link}
            searchable={link.searchUrl !== undefined}
            visible={!getIsLinkHidden(link)}
          />
        ))}

        {isCurrentAppMode(AppMode.default) && hiddenLinks.length > 0 ? (
          <>
            <LinkGroupButton onClick={handleShowHiddenLinksClick}>
              {showHiddenLinksButtonLabel}
            </LinkGroupButton>

            {showHiddenLinks ? (
              <div>
                {hiddenLinks.map((link) => (
                  <Link
                    key={link.url}
                    link={link}
                    searchable={link.searchUrl !== undefined}
                  />
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  )
}
