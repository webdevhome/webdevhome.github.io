import { MenuSection } from '@headlessui/react'
import { mdiListBoxOutline, mdiSourceBranch } from '@mdi/js'
import { FC } from 'react'
import packageJson from '../../../package.json'
import { useAllLinks } from '../../links'
import { useHiddenLinksCount } from '../../stores/hiddenLinks/hiddenLinksHooks'
import { AppMenuHeader } from '../Header/AppMenuHeader'
import { AppMenuItem } from '../Header/AppMenuItem'
import { AppMenuFooter } from '../Header/AppMenuFooter'
import { MdiIcon } from '../Icon/MdiIcon'

export const AppInfo: FC = () => {
  const allLinks = useAllLinks()
  const hiddenLinksCount = useHiddenLinksCount()

  return (
    <MenuSection className="flex flex-col gap-y-px">
      <AppMenuHeader title="Links" />
      <AppMenuItem
        icon={<MdiIcon path={mdiListBoxOutline} />}
        label="Changelog"
        action="https://github.com/webdevhome/webdevhome.github.io/releases"
      />
      <AppMenuItem
        icon={<MdiIcon path={mdiSourceBranch} />}
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
