import {
  ExternalLinkIcon,
  FormIcon,
  ListTodoIcon,
  TagsIcon,
  WallpaperIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { toggleAppMode, useIsAppMode } from '../app/appMode.ts'
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
        selected={isAppMode('customize')}
        action={() => toggleAppMode('default', 'customize')}
      />

      <UiMenuDivider />

      <UiMenuItem
        label="Show links description"
        icon={<FormIcon />}
        selected={showDescriptions}
        closeOnAction={false}
        action={toggleShowDescriptions}
      />
      <UiMenuItem
        label="Show categories in search"
        icon={<TagsIcon />}
        selected={showCategoriesInSearch}
        closeOnAction={false}
        action={toggleShowCategoriesInSearch}
      />
      <UiMenuItem
        label="Colorful background"
        icon={<WallpaperIcon />}
        selected={showBackground}
        closeOnAction={false}
        action={toggleBackgroundImage}
      />
      <UiMenuItem
        label="Open links in new tab"
        icon={<ExternalLinkIcon />}
        selected={openLinksInNewTab}
        closeOnAction={false}
        action={toggleOpenLinksInNewTab}
      />
    </>
  )
}
