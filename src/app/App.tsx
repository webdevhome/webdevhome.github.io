import { Activity, type FC } from 'react'
import { AppHeader } from '../header/AppHeader.tsx'
import { AppSearchButton } from '../header/AppSearchButton.tsx'
import { ExportDialog } from '../import-export/ExportDialog.tsx'
import { ImportDialog } from '../import-export/ImportDialog.tsx'
import { JumpLinks } from '../jump-links/JumpLinks.tsx'
import { Links } from '../links/Links.tsx'
import { Search } from '../search/Search.tsx'
import { useThemes } from '../theme-switcher/themes.ts'
import { useActivityMode } from '../utils/useActivityMode.ts'
import { AppHeaderActions } from './AppHeaderActions.tsx'
import { AppLayout } from './AppLayout.tsx'
import { appMode, useIsAppMode } from './appModeStore.ts'
import { AppSettingsMenu } from './AppSettingsMenu.tsx'

export const App: FC = () => {
  useThemes()

  const isAppMode = useIsAppMode()

  const activityMode = useActivityMode()

  const headerCenterItems = (
    <>{isAppMode(appMode.default) && <AppSearchButton />}</>
  )

  const headerActions = (
    <>
      <AppHeaderActions />
      <AppSettingsMenu />
    </>
  )

  const header = (
    <AppHeader centerItems={headerCenterItems} actions={headerActions} />
  )

  const isDefaultOrCustomizeAppMode = isAppMode(
    appMode.default,
    appMode.customize,
  )

  const sidebar = <>{isDefaultOrCustomizeAppMode ? <JumpLinks /> : null}</>

  return (
    <>
      <AppLayout header={header} sidebar={sidebar}>
        <Activity mode={activityMode(() => isDefaultOrCustomizeAppMode)}>
          <Links />
        </Activity>

        <Activity mode={activityMode(() => !isDefaultOrCustomizeAppMode)}>
          <Search />
        </Activity>
      </AppLayout>

      <ImportDialog />
      <ExportDialog />
    </>
  )
}
