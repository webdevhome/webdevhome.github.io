import { MenuSection } from '@headlessui/react'
import { FolderGitIcon, LogsIcon } from 'lucide-react'
import { type FC } from 'react'
import packageJson from '../../package.json' with { type: 'json' }
import { allLinks } from '../links/links.ts'
import { AppMenuFooter } from '../header/AppMenuFooter.tsx'
import { AppMenuHeader } from '../header/AppMenuHeader.tsx'
import { AppMenuItem } from '../header/AppMenuItem.tsx'
import { useHiddenUrlsCount } from '../links/hiddenUrlsStore.ts'

export const AppInfo: FC = () => {
  const allLinksCount = allLinks.length
  const hiddenUrlsCount = useHiddenUrlsCount()
  const visibleUrlsCount = allLinksCount - hiddenUrlsCount

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
        label="Source code"
        action="https://github.com/webdevhome/webdevhome.github.io"
      />
      <AppMenuFooter>
        <p>
          {allLinksCount} links &bull; {visibleUrlsCount} visible &bull;{' '}
          {hiddenUrlsCount} hidden
        </p>
        <p>
          <strong>Version {packageJson.version}</strong>
        </p>
      </AppMenuFooter>
    </MenuSection>
  )
}
