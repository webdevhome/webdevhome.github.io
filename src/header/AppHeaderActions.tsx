import { useStore } from '@nanostores/react'
import {
  ArrowLeftIcon,
  ArrowUpToLineIcon,
  CheckIcon,
  CopyMinusIcon,
  CopyPlusIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
  XIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { appModeStore } from '../app-mode/appModeStore.ts'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { categoriesStore } from '../link-categories/categoriesStore.ts'
import { hiddenLinksStore } from '../links/hiddenLinksStore.ts'
import { onSiteSearchStore } from '../search/onSiteSearch.ts'
import { UiActionButton } from '../ui/UiActionButton.tsx'
import { UiHeaderDivider } from '../ui/UiHeaderDivider.tsx'
import { scrollToTop, useIsScrolledToTop } from './scrollToTop.ts'

export const AppHeaderActions: FC = () => {
  const isAppMode = useIsAppMode()
  const onSiteSearchTarget = useStore(onSiteSearchStore.$searchTarget)
  const areAllLinkGroupsCollapsed = useStore(categoriesStore.$areAllCollapsed)
  const areAllLinkGroupsExpanded = useStore(categoriesStore.$areAllExpanded)
  const areAnyLinksHidden = useStore(hiddenLinksStore.$areAnyLinksHidden)
  const isScrolledToTop = useIsScrolledToTop()

  const hasOnSiteSearchTarget = onSiteSearchTarget !== null

  const defaultAndCustomizeModeActions = (
    <>
      <UiActionButton
        icon={<CopyMinusIcon />}
        title="Collapse all hidden links"
        enabled={!areAllLinkGroupsCollapsed && areAnyLinksHidden}
        action={categoriesStore.collapseAll}
      />
      <UiActionButton
        icon={<CopyPlusIcon />}
        title="Expand all hidden links"
        enabled={!areAllLinkGroupsExpanded && areAnyLinksHidden}
        action={categoriesStore.expandAll}
      />
      <UiActionButton
        icon={<ArrowUpToLineIcon />}
        title="Scroll to top"
        enabled={!isScrolledToTop}
        action={scrollToTop}
      />
    </>
  )

  if (isAppMode('default')) {
    return (
      <>
        <UiActionButton
          icon={<SearchIcon />}
          label="Search"
          visible="small-screens"
          action={() => appModeStore.set('search')}
        />
        {defaultAndCustomizeModeActions}
      </>
    )
  }

  if (isAppMode('search')) {
    return (
      <>
        {hasOnSiteSearchTarget && (
          <UiActionButton
            icon={<ArrowLeftIcon />}
            label="Back to link search"
            labelVisible="big-screens"
            action={appModeStore.exitOnSiteSearch}
          />
        )}

        <UiActionButton
          icon={<XIcon />}
          label="Close search"
          labelVisible="big-screens"
          highlight
          action={appModeStore.exitSearchMode}
        />
      </>
    )
  }

  if (isAppMode('customize')) {
    return (
      <>
        <UiActionButton
          icon={<EyeIcon />}
          label="Show all"
          action={hiddenLinksStore.showAll}
        />
        <UiActionButton
          icon={<EyeOffIcon />}
          label="Hide all"
          action={hiddenLinksStore.hideAll}
        />

        <UiActionButton
          icon={<CheckIcon />}
          label="Done"
          labelVisible="always"
          highlight
          action={() => appModeStore.set('default')}
        />

        <UiHeaderDivider />

        {defaultAndCustomizeModeActions}
      </>
    )
  }

  return null
}
