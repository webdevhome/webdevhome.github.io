import {
  ArrowLeftIcon,
  ArrowUpToLineIcon,
  CheckIcon,
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
import { hideAllUrls, showAllUrls } from '../links/hiddenUrls.ts'
import { useHasSearchTarget } from '../search/onSiteSearch.ts'
import { UiActionButton } from '../ui/UiActionButton.tsx'
import { UiHeaderDivider } from '../ui/UiHeaderDivider.tsx'

function handleScrollTopClick() {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement === null) return

  mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

export const AppHeaderActions: FC = () => {
  const isAppMode = useIsAppMode()
  const hasSearchTarget = useHasSearchTarget()

  if (isAppMode('default')) {
    return (
      <>
        <UiActionButton
          icon={<SearchIcon />}
          label="Search"
          visible="small-screens"
          action={() => setAppMode('search')}
        />
        <UiActionButton
          icon={<ArrowUpToLineIcon />}
          title="Scroll to top"
          action={handleScrollTopClick}
        />
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

        <UiActionButton
          icon={<ArrowUpToLineIcon />}
          title="Scroll to top"
          action={handleScrollTopClick}
        />
      </>
    )
  }

  return null
}
