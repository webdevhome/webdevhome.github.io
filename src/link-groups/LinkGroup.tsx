import { type FC } from 'react'
import { useIsAppMode } from '../app/appMode.ts'
import {
  toggleUrls,
  useIsUrlHidden,
  type LinkVisibilityState,
} from '../links/hiddenUrls.ts'
import { Link } from '../links/Link.tsx'
import { type Category, type LinkItem } from '../links/links.ts'
import { slugify } from '../utils/slugify.ts'
import {
  LinkGroupSelectAllButton,
  type LinksVisible,
} from './LinkGroupSelectAllButton.tsx'
import { LinkGroupTitle } from './LinkGroupTitle.tsx'
import { ShowHiddenLinksButton } from './ShowHiddenLinksButton.tsx'

type Props = {
  group: Category
  links: LinkItem[]
  showHiddenLinks: boolean
  onToggleShowHiddenLinks: (id: string) => void
}

export const LinkGroup: FC<Props> = ({
  group,
  links,
  showHiddenLinks,
  onToggleShowHiddenLinks,
}) => {
  // const [showHiddenLinks, setShowHiddenLinks] = useState(false)

  const isAppMode = useIsAppMode()
  const isUrlHidden = useIsUrlHidden()

  const linksByVisibility = Object.groupBy(
    links,
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
    <div id={slugify(group.title)} className="scroll-mt-2">
      <div className="mb-2 flex gap-x-1">
        <LinkGroupTitle color={group.color}>{group.title}</LinkGroupTitle>

        <LinkGroupSelectAllButton
          linksVisible={linksVisible}
          onClick={() => toggleUrls(links.map((link) => link.url))}
        />
      </div>

      <div className="grid gap-y-px">
        {linksByVisibility.visible?.map((link) => (
          <Link key={link.id} link={link} />
        ))}

        <ShowHiddenLinksButton
          hiddenLinksCount={hiddenLinksCount}
          showHiddenLinks={showHiddenLinks}
          onClick={() => onToggleShowHiddenLinks(group.id)}
        />

        {showHiddenLinks &&
          linksByVisibility.hidden?.map((link) => (
            <Link key={link.id} link={link} />
          ))}
      </div>
    </div>
  )
}
