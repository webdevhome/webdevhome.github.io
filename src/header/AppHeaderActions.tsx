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
import {
  exitOnSiteSearch,
  exitSearchMode,
  setAppMode,
  useIsAppMode,
} from '../app/appMode.ts'
import {
  collapseAllLinkGroups,
  expandAllLinkGroups,
  useAreAllLinkGroupsCollapsed,
  useAreAllLinkGroupsExpanded,
} from '../link-groups/linkGroupsState.ts'
import {
  hideAllUrls,
  showAllUrls,
  useAreAnyUrlsHidden,
} from '../links/hiddenUrls.ts'
import { useHasSearchTarget } from '../search/onSiteSearch.ts'
import { UiActionButton } from '../ui/UiActionButton.tsx'
import { UiHeaderDivider } from '../ui/UiHeaderDivider.tsx'
import { scrollToTop, useIsScrolledToTop } from './scrollToTop.ts'

export const AppHeaderActions: FC = () => {
  const isAppMode = useIsAppMode()
  const hasSearchTarget = useHasSearchTarget()
  const areAllLinkGroupsCollapsed = useAreAllLinkGroupsCollapsed()
  const areAllLinkGroupsExpanded = useAreAllLinkGroupsExpanded()
  const areAnyUrlsHidden = useAreAnyUrlsHidden()
  const isScrolledToTop = useIsScrolledToTop()

  const defaultAndCustomizeModeActions = (
    <>
      <UiActionButton
        icon={<CopyMinusIcon />}
        title="Collapse all"
        enabled={!areAllLinkGroupsCollapsed && areAnyUrlsHidden}
        action={collapseAllLinkGroups}
      />
      <UiActionButton
        icon={<CopyPlusIcon />}
        title="Expand all"
        enabled={!areAllLinkGroupsExpanded && areAnyUrlsHidden}
        action={expandAllLinkGroups}
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
          action={() => setAppMode('search')}
        />
        {defaultAndCustomizeModeActions}
      </>
    )
  }

  if (isAppMode('search')) {
    return (
      <>
        {hasSearchTarget() && (
          <UiActionButton
            icon={<ArrowLeftIcon />}
            label="Back to link search"
            labelVisible="big-screens"
            action={exitOnSiteSearch}
          />
        )}

        <UiActionButton
          icon={<XIcon />}
          label="Close search"
          labelVisible="big-screens"
          highlight
          action={exitSearchMode}
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
          action={showAllUrls}
        />
        <UiActionButton
          icon={<EyeOffIcon />}
          label="Hide all"
          action={hideAllUrls}
        />

        <UiActionButton
          icon={<CheckIcon />}
          label="Done"
          labelVisible="always"
          highlight
          action={() => setAppMode('default')}
        />

        <UiHeaderDivider />

        {defaultAndCustomizeModeActions}
      </>
    )
  }

  return null
}
