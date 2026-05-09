import { atom, computed, readonlyType } from 'nanostores'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { type Category } from '../links/links.ts'
import { type StoreObject } from '../utils/nanostores.ts'

const $expandedCategories = atom(new Set<Category>())

const $areAllCollapsed = computed(
  [$expandedCategories, hiddenLinksStore.$categoriesWithHiddenLinks],
  (expanded, categoriesWithHiddenLinks): boolean => {
    return expanded.isDisjointFrom(categoriesWithHiddenLinks)
  },
)

const $areAllExpanded = computed(
  [$expandedCategories, hiddenLinksStore.$categoriesWithHiddenLinks],
  (expanded, categoriesWithHiddenLinks): boolean => {
    return expanded.isSupersetOf(categoriesWithHiddenLinks)
  },
)

export const categoriesStore = {
  $expandedCategories: readonlyType($expandedCategories),

  $areAllCollapsed,
  $areAllExpanded,

  toggle(category: Category) {
    const categories = $expandedCategories.get()
    const newCategories = categories.symmetricDifference(new Set([category]))
    $expandedCategories.set(newCategories)
  },

  collapseAll() {
    $expandedCategories.set(new Set())
  },

  expandAll() {
    $expandedCategories.set(
      new Set(hiddenLinksStore.$categoriesWithHiddenLinks.get()),
    )
  },
} satisfies StoreObject
