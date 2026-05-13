import { useStore } from '@nanostores/react'
import { type FC } from 'react'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import {
  hiddenLinksStore,
  type LinkVisibilityState,
} from '../links/hiddenLinksStore.ts'
import { Link } from '../links/Link.tsx'
import { type Category, type LinkItem } from '../links/links.ts'
import { slugify } from '../utils/slugify.ts'
import {
  CategorySelectAllButton,
  type LinksVisible,
} from './CategorySelectAllButton.tsx'
import { LinkGroupTitle } from './CategoryTitle.tsx'
import { ShowHiddenLinksButton } from './ShowHiddenLinksButton.tsx'

type Props = {
  category: Category
  links: LinkItem[]
  showHiddenLinks: boolean
  onToggleShowHiddenLinks: (category: Category) => void
}

export const LinkCategory: FC<Props> = ({
  category,
  links,
  showHiddenLinks,
  onToggleShowHiddenLinks,
}) => {
  const isAppMode = useIsAppMode()
  const hiddenLinks = useStore(hiddenLinksStore.$hiddenLinks)

  const linksByVisibility = Object.groupBy(
    links,
    (l): LinkVisibilityState => (hiddenLinks.has(l) ? 'hidden' : 'visible'),
  )

  const visibleLinksCount = linksByVisibility.visible?.length ?? 0
  const hiddenLinksCount = linksByVisibility.hidden?.length ?? 0
  const areAllLinksHidden = visibleLinksCount === 0

  const linksVisible = ((): LinksVisible => {
    if (visibleLinksCount > 0 && hiddenLinksCount > 0) {
      return 'some'
    }
    if (visibleLinksCount > 0) {
      return 'all'
    }
    return 'none'
  })()

  if (areAllLinksHidden && !isAppMode('customize')) {
    return null
  }

  return (
    <div id={slugify(category.title)} className="scroll-mt-2">
      <div className="mb-2 flex gap-x-1">
        <LinkGroupTitle color={category.color}>{category.title}</LinkGroupTitle>

        <CategorySelectAllButton
          linksVisible={linksVisible}
          onClick={() => hiddenLinksStore.toggleMultiple(links)}
        />
      </div>

      <div className="grid gap-y-px">
        {linksByVisibility.visible?.map((link) => (
          <Link key={link.id} link={link} />
        ))}

        <ShowHiddenLinksButton
          hiddenLinksCount={hiddenLinksCount}
          showHiddenLinks={showHiddenLinks}
          onClick={() => onToggleShowHiddenLinks(category)}
        />

        {showHiddenLinks &&
          linksByVisibility.hidden?.map((link) => (
            <Link key={link.id} link={link} />
          ))}
      </div>
    </div>
  )
}
