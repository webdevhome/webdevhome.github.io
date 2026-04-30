import {
  ExternalLinkIcon,
  FormIcon,
  ListTodoIcon,
  WallpaperIcon,
} from 'lucide-react'
import { type FC } from 'react'
import { AppMenuDivider } from '../header/AppMenuDivider.tsx'
import { AppMenuItem } from '../header/AppMenuItem.tsx'
import {
  toggleShowDescriptions,
  useShowDescriptions,
} from '../links/useLinkDescriptions.ts'
import {
  toggleOpenLinksInNewTab,
  useOpenLinksInNewTab,
} from '../links/useOpenLinksInNewTab.ts'
import { appMode, setAppMode, useIsAppMode } from './appModeStore.ts'
import {
  toggleBackgroundImage,
  useShowBackground,
} from './useBackgroundImage.ts'

export const AppSettings: FC = () => {
  const showDescriptions = useShowDescriptions()
  const openLinksInNewTab = useOpenLinksInNewTab()
  const showBackground = useShowBackground()
  const isAppMode = useIsAppMode()

  return (
    <>
      <AppMenuItem
        label="Show/hide links..."
        icon={<ListTodoIcon />}
        action={() => setAppMode(appMode.customize)}
        visible={isAppMode(appMode.default)}
      />
      <AppMenuDivider />
      <AppMenuItem
        label="Show links description"
        icon={<FormIcon />}
        selected={showDescriptions}
        action={toggleShowDescriptions}
      />
      <AppMenuItem
        label="Colorful background"
        icon={<WallpaperIcon />}
        selected={showBackground}
        action={toggleBackgroundImage}
      />
      <AppMenuItem
        label="Open links in new tab"
        icon={<ExternalLinkIcon />}
        selected={openLinksInNewTab}
        action={toggleOpenLinksInNewTab}
      />
    </>
  )
}
