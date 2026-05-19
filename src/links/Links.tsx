import { useStore } from '@nanostores/react'
import classNames from 'classnames'
import { type FC } from 'react'
import { categoriesStore } from '../link-categories/categoriesStore.ts'
import { LinkCategory } from '../link-categories/LinkCategory.tsx'
import { categoryToLinksMap } from './links.ts'

export const Links: FC = () => {
  const expandedCategories = useStore(categoriesStore.$expandedCategories)

  return (
    <div
      className={classNames(
        'grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))]',
        'gap-x-4 gap-y-8',
        'p-2',
      )}
    >
      {categoryToLinksMap
        .entries()
        .map(([category, links]) => (
          <LinkCategory
            key={category.id}
            category={category}
            links={links}
            showHiddenLinks={expandedCategories.has(category)}
            onToggleShowHiddenLinks={categoriesStore.toggle}
          />
        ))
        .toArray()}
    </div>
  )
}
