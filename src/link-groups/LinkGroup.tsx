import { type FC, useState } from 'react'
import { useIsAppMode } from '../app/appModeStore.ts'
import {
  toggleUrls,
  useAllUrlsAreHidden,
  useHiddenUrls,
} from '../links/hiddenUrlsStore.ts'
import { LinkList } from '../links/LinkList.tsx'
import { type LinkGroup as ILinkGroup } from '../links/links.ts'
import { slugify } from '../utils/slugify.ts'
import { LinkGroupSelectAllButton } from './LinkGroupSelectAllButton.tsx'
import { LinkGroupTitle } from './LinkGroupTitle.tsx'
import { ShowHiddenLinksButton } from './ShowHiddenLinksButton.tsx'

type Props = {
  group: ILinkGroup
}

export const LinkGroup: FC<Props> = ({ group }) => {
  const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const isAppMode = useIsAppMode()
  const hiddenUrls = useHiddenUrls()
  const allUrlsAreHidden = useAllUrlsAreHidden(group.items.map((i) => i.url))

  const visibleLinks = group.items.filter((i) => !hiddenUrls.includes(i.url))
  const hiddenLinks = group.items.filter((i) => hiddenUrls.includes(i.url))

  if (allUrlsAreHidden && !isAppMode('customize')) {
    return null
  }

  return (
    <div id={slugify(group.name)} className="scroll-mt-2">
      <div className="mb-2 flex gap-x-1">
        <LinkGroupTitle color={group.color}>{group.name}</LinkGroupTitle>

        <LinkGroupSelectAllButton
          allUrlsAreHidden={allUrlsAreHidden}
          onClick={() => toggleUrls(group.items.map((link) => link.url))}
        />
      </div>

      <div className="grid gap-y-px">
        <LinkList links={visibleLinks} />

        <ShowHiddenLinksButton
          hiddenLinksCount={hiddenLinks.length}
          showHiddenLinks={showHiddenLinks}
          onClick={() => setShowHiddenLinks(!showHiddenLinks)}
        />

        {showHiddenLinks ? (
          <LinkList links={hiddenLinks} areLinksHidden />
        ) : null}
      </div>
    </div>
  )
}
