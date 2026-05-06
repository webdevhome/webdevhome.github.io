import {
  ExternalLinkIcon,
  FormIcon,
  ListTodoIcon,
  TagsIcon,
  WallpaperIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { setAppMode, useIsAppMode } from '../app/appMode.ts'
import {
  toggleShowDescriptions,
  useShowDescriptions,
} from '../links/linkDescriptions.ts'
import {
  toggleOpenLinksInNewTab,
  useOpenLinksInNewTab,
} from '../links/openLinksInNewTab.ts'
import {
  toggleShowCategoriesInSearch,
  useShowCategoriesInSearch,
} from '../search/categoriesInSearch.ts'
import { UiMenuDivider } from '../ui/UiMenuDivider.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import {
  toggleBackgroundImage,
  useShowBackground,
} from './useBackgroundImage.ts'

export const AppSettings: FC = () => {
  const showDescriptions = useShowDescriptions()
  const openLinksInNewTab = useOpenLinksInNewTab()
  const showBackground = useShowBackground()
  const showCategoriesInSearch = useShowCategoriesInSearch()
  const isAppMode = useIsAppMode()

  return (
    <>
      <UiMenuItem
        label="Show/hide links..."
        icon={<ListTodoIcon />}
        action={() => setAppMode('customize')}
        visible={isAppMode('default')}
      />
      <UiMenuDivider />
      <UiMenuItem
        label="Show links description"
        icon={<FormIcon />}
        selected={showDescriptions}
        action={toggleShowDescriptions}
      />
      <UiMenuItem
        label="Show categories in search"
        icon={<TagsIcon />}
        selected={showCategoriesInSearch}
        action={toggleShowCategoriesInSearch}
      />
      <UiMenuItem
        label="Colorful background"
        icon={<WallpaperIcon />}
        selected={showBackground}
        action={toggleBackgroundImage}
      />
      <UiMenuItem
        label="Open links in new tab"
        icon={<ExternalLinkIcon />}
        selected={openLinksInNewTab}
        action={toggleOpenLinksInNewTab}
      />
    </>
  )
}
