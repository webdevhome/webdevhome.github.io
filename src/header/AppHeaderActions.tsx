import {
  ArrowLeftIcon,
  ArrowUpToLineIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { exitSearchMode, setAppMode, useIsAppMode } from '../app/appMode.ts'
import { hideAllUrls, showAllUrls } from '../links/hiddenUrls.ts'
import { UiActionButton } from '../ui/UiActionButton.tsx'

function handleScrollTopClick() {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement === null) return

  mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

export const AppHeaderActions: FC = () => {
  const isAppMode = useIsAppMode()

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
          label="Top"
          action={handleScrollTopClick}
        />
      </>
    )
  }

  if (isAppMode('search')) {
    return (
      <UiActionButton
        icon={<ArrowLeftIcon />}
        label="Back"
        highlight
        action={exitSearchMode}
      />
    )
  }

  if (isAppMode('customize')) {
    return (
      <>
        <UiActionButton
          icon={<CheckIcon />}
          label="Done"
          highlight
          action={() => setAppMode('default')}
        />
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
      </>
    )
  }

  return null
}
