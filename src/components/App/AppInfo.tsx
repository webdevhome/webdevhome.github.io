import { MenuSection } from '@headlessui/react'
import { FolderGitIcon, LogsIcon } from 'lucide-react'
import { FC } from 'react'
import packageJson from '../../../package.json'
import { useAllLinks } from '../../links'
import { useHiddenLinksCount } from '../../stores/hiddenLinks/hiddenLinksHooks'
import { AppMenuFooter } from '../Header/AppMenuFooter'
import { AppMenuHeader } from '../Header/AppMenuHeader'
import { AppMenuItem } from '../Header/AppMenuItem'

export const AppInfo: FC = () => {
  const allLinks = useAllLinks()
  const hiddenLinksCount = useHiddenLinksCount()

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <AppMenuHeader title="Links" />
      <AppMenuItem
        icon={<LogsIcon />}
        label="Changelog"
        action="https://github.com/webdevhome/webdevhome.github.io/releases"
      />
      <AppMenuItem
        icon={<FolderGitIcon />}
        label="Source"
        action="https://github.com/webdevhome/webdevhome.github.io"
      />
      <AppMenuFooter>
        <p>WebdevHome v{packageJson.version}</p>
        <p>
          {hiddenLinksCount}/{allLinks.length} links hidden
        </p>
      </AppMenuFooter>
    </MenuSection>
  )
}
