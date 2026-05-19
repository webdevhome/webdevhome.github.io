import { EllipsisIcon } from 'lucide-react'
import { Activity, type FC } from 'react'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { AppHeader } from '../header/AppHeader.tsx'
import { AppHeaderActions } from '../header/AppHeaderActions.tsx'
import { AppInfo } from '../header/AppInfo.tsx'
import { AppImportExportMenuItems } from '../import-export/AppImportExportMenuItems.tsx'
import { ExportDialog } from '../import-export/ExportDialog.tsx'
import { ImportDialog } from '../import-export/ImportDialog.tsx'
import { JumpLinks } from '../jump-links/JumpLinks.tsx'
import { Links } from '../links/Links.tsx'
import { Search } from '../search/Search.tsx'
import { AppSettings } from '../settings/AppSettings.tsx'
import { AppThemeSwitcher } from '../settings/AppThemeSwitcher.tsx'
import { UiMenu } from '../ui/UiMenu.tsx'
import { UiSearchButton } from '../ui/UiSearchButton.tsx'
import { useActivityMode } from '../utils/useActivityMode.ts'
import { AppLayout } from './AppLayout.tsx'

export const App: FC = () => {
  const isAppMode = useIsAppMode()
  const activityMode = useActivityMode()

  const header = (
    <AppHeader
      centerItems={isAppMode('default') ? <UiSearchButton /> : null}
      actions={
        <>
          <AppHeaderActions />
          <UiMenu icon={<EllipsisIcon />}>
            <AppSettings />
            <AppThemeSwitcher />
            <AppImportExportMenuItems />
            <AppInfo />
          </UiMenu>
        </>
      }
    />
  )

  const sidebar = isAppMode('default', 'customize') ? <JumpLinks /> : null

  return (
    <>
      <AppLayout header={header} sidebar={sidebar}>
        <Activity mode={activityMode(() => isAppMode('default', 'customize'))}>
          <Links />
        </Activity>

        <Activity mode={activityMode(() => isAppMode('search'))}>
          <Search />
        </Activity>
      </AppLayout>

      <ImportDialog />
      <ExportDialog />
    </>
  )
}
