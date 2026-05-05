import { useState, type FC } from 'react'
import { useIsAppMode } from '../app/appMode.ts'
import {
  toggleUrls,
  useIsUrlHidden,
  type LinkVisibilityState,
} from '../links/hiddenUrls.ts'
import { LinkList } from '../links/LinkList.tsx'
import { type LinkGroup as ILinkGroup } from '../links/links.ts'
import { slugify } from '../utils/slugify.ts'
import {
  LinkGroupSelectAllButton,
  type LinksVisible,
} from './LinkGroupSelectAllButton.tsx'
import { LinkGroupTitle } from './LinkGroupTitle.tsx'
import { ShowHiddenLinksButton } from './ShowHiddenLinksButton.tsx'

type Props = {
  group: ILinkGroup
}

export const LinkGroup: FC<Props> = ({ group }) => {
  const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const isAppMode = useIsAppMode()
  const isUrlHidden = useIsUrlHidden()

  const linksByVisibility = Object.groupBy(
    group.items,
    (l): LinkVisibilityState => (isUrlHidden(l.url) ? 'hidden' : 'visible'),
  )

  const visibleLinksCount = linksByVisibility.visible?.length ?? 0
  const hiddenLinksCount = linksByVisibility.hidden?.length ?? 0
  const areAllUrlsHidden = visibleLinksCount === 0

  const linksVisible = ((): LinksVisible => {
    if (visibleLinksCount > 0 && hiddenLinksCount > 0) {
      return 'some'
    }
    if (visibleLinksCount > 0) {
      return 'all'
    }
    return 'none'
  })()

  if (areAllUrlsHidden && !isAppMode('customize')) {
    return null
  }

  return (
    <div id={slugify(group.name)} className="scroll-mt-2">
      <div className="mb-2 flex gap-x-1">
        <LinkGroupTitle color={group.color}>{group.name}</LinkGroupTitle>

        <LinkGroupSelectAllButton
          linksVisible={linksVisible}
          onClick={() => toggleUrls(group.items.map((link) => link.url))}
        />
      </div>

      <div className="grid gap-y-px">
        <LinkList links={linksByVisibility.visible} />

        <ShowHiddenLinksButton
          hiddenLinksCount={hiddenLinksCount}
          showHiddenLinks={showHiddenLinks}
          onClick={() => setShowHiddenLinks(!showHiddenLinks)}
        />

        {showHiddenLinks ? (
          <LinkList links={linksByVisibility.hidden} areLinksHidden />
        ) : null}
      </div>
    </div>
  )
}
