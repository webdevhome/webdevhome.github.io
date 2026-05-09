import { useStore } from '@nanostores/react'
import {
  ExternalLinkIcon,
  FormIcon,
  ListTodoIcon,
  TagsIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { appModeStore } from '../app-mode/appModeStore.ts'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { linkDescriptionsStore } from '../links/linkDescriptions.ts'
import { openLinksInNewTabStore } from '../links/openLinksInNewTab.ts'
import { showCategoriesInSearchStore } from '../search/categoriesInSearch.ts'
import { UiMenuDivider } from '../ui/UiMenuDivider.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'

export const AppSettings: FC = () => {
  const showDescriptions = useStore(linkDescriptionsStore.$show)
  const openLinksInNewTab = useStore(openLinksInNewTabStore.$setting)
  const showCategoriesInSearch = useStore(showCategoriesInSearchStore.$setting)
  const isAppMode = useIsAppMode()

  return (
    <>
      <UiMenuItem
        label="Show/hide links..."
        icon={<ListTodoIcon />}
        selected={isAppMode('customize')}
        action={() => appModeStore.toggle('default', 'customize')}
      />

      <UiMenuDivider />

      <UiMenuItem
        label="Show links description"
        icon={<FormIcon />}
        selected={showDescriptions}
        closeOnAction={false}
        action={linkDescriptionsStore.toggle}
      />
      <UiMenuItem
        label="Show categories in search"
        icon={<TagsIcon />}
        selected={showCategoriesInSearch}
        closeOnAction={false}
        action={showCategoriesInSearchStore.toggle}
      />
      <UiMenuItem
        label="Open links in new tab"
        icon={<ExternalLinkIcon />}
        selected={openLinksInNewTab}
        closeOnAction={false}
        action={openLinksInNewTabStore.toggle}
      />
    </>
  )
}
