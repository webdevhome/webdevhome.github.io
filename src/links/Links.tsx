import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { type FC } from 'react'
import { categoriesStore } from '../link-categories/categoriesStore.ts'
import { LinkCategory } from '../link-categories/LinkCategory.tsx'
import { categoryToLinksMap } from './links.ts'

export const Links: FC = () => {
  const expandedLinkGroups = useStore(categoriesStore.$expandedCategories)

  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))]',
        'gap-x-4 gap-y-8',
        'p-2',
      )}
    >
      {categoryToLinksMap
        .entries()
        .map(([category, links]) => (
          <LinkCategory
            key={category.id}
            group={category}
            links={links}
            showHiddenLinks={expandedLinkGroups.has(category)}
            onToggleShowHiddenLinks={categoriesStore.toggle}
          />
        ))
        .toArray()}
    </div>
  )
}
