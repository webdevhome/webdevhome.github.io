import { MenuSection } from '@headlessui/react'
import { FolderGitIcon, LogsIcon } from 'lucide-react'
import { type FC } from 'react'
import packageJson from '../../package.json' with { type: 'json' }
import { allLinks } from '../links/links.ts'
import { UiMenuFooter } from '../ui/UiMenuFooter.tsx'
import { UiMenuHeader } from '../ui/UiMenuHeader.tsx'
import { UiMenuItem } from '../ui/UiMenuItem.tsx'
import { useHiddenUrlsCount } from '../links/hiddenUrlsStore.ts'

export const AppInfo: FC = () => {
  const allLinksCount = allLinks.length
  const hiddenUrlsCount = useHiddenUrlsCount()
  const visibleUrlsCount = allLinksCount - hiddenUrlsCount

  return (
    <MenuSection className="flex flex-col gap-y-1">
      <UiMenuHeader title="Links" />
      <UiMenuItem
        icon={<LogsIcon />}
        label="Changelog"
        action="https://github.com/webdevhome/webdevhome.github.io/releases"
      />
      <UiMenuItem
        icon={<FolderGitIcon />}
        label="Source code"
        action="https://github.com/webdevhome/webdevhome.github.io"
      />
      <UiMenuFooter>
        <p>
          {allLinksCount} links &bull; {visibleUrlsCount} visible &bull;{' '}
          {hiddenUrlsCount} hidden
        </p>
        <p>
          <strong>Version {packageJson.version}</strong>
        </p>
      </UiMenuFooter>
    </MenuSection>
  )
}
