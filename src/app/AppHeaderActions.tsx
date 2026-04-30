import {
  ArrowLeftIcon,
  ArrowUpToLineIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { AppAction } from '../header/AppAction.tsx'
import { hideAllUrls, showAllUrls } from '../links/hiddenUrlsStore.ts'
import {
  appMode,
  exitSearchMode,
  setAppMode,
  useIsAppMode,
} from './appModeStore.ts'

function handleScrollTopClick() {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement === null) return

  mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

export const AppHeaderActions: FC = () => {
  const isAppMode = useIsAppMode()

  if (isAppMode(appMode.default)) {
    return (
      <>
        <AppAction
          icon={<SearchIcon />}
          label="Search"
          visible="small-screens"
          action={() => setAppMode(appMode.search)}
        />
        <AppAction
          icon={<ArrowUpToLineIcon />}
          label="Top"
          action={handleScrollTopClick}
        />
      </>
    )
  }

  if (isAppMode(appMode.search)) {
    return (
      <AppAction
        icon={<ArrowLeftIcon />}
        label="Back"
        highlight
        action={exitSearchMode}
      />
    )
  }

  if (isAppMode(appMode.customize)) {
    return (
      <>
        <AppAction
          icon={<CheckIcon />}
          label="Done"
          highlight
          action={() => setAppMode(appMode.default)}
        />
        <AppAction icon={<EyeIcon />} label="Show all" action={showAllUrls} />
        <AppAction
          icon={<EyeOffIcon />}
          label="Hide all"
          action={hideAllUrls}
        />
      </>
    )
  }

  return null
}
