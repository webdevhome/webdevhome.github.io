import { Activity, type FC } from 'react'
import { AppHeader } from '../header/AppHeader.tsx'
import { UiSearchButton } from '../ui/UiSearchButton.tsx'
import { ExportDialog } from '../import-export/ExportDialog.tsx'
import { ImportDialog } from '../import-export/ImportDialog.tsx'
import { JumpLinks } from '../jump-links/JumpLinks.tsx'
import { Links } from '../links/Links.tsx'
import { Search } from '../search/Search.tsx'
import { useApplyTheme } from '../settings/useApplyTheme.ts'
import { useActivityMode } from '../utils/useActivityMode.ts'
import { AppHeaderActions } from '../header/AppHeaderActions.tsx'
import { AppLayout } from './AppLayout.tsx'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'
import { AppSettingsMenu } from '../settings/AppSettingsMenu.tsx'

export const App: FC = () => {
  useApplyTheme()

  const isAppMode = useIsAppMode()
  const activityMode = useActivityMode()

  const headerCenterItems = isAppMode('default') ? <UiSearchButton /> : null

  const headerActions = (
    <>
      <AppHeaderActions />
      <AppSettingsMenu />
    </>
  )

  const header = (
    <AppHeader centerItems={headerCenterItems} actions={headerActions} />
  )

  const sidebar = isAppMode('default', 'customize') ? <JumpLinks /> : null

  return (
    <>
      <AppLayout header={header} sidebar={sidebar}>
        <Activity mode={activityMode(() => isAppMode('default', 'customize'))}>
          <Links />
        </Activity>

        <Activity mode={activityMode(() => !isAppMode('default', 'customize'))}>
          <Search />
        </Activity>
      </AppLayout>

      <ImportDialog />
      <ExportDialog />
    </>
  )
}
