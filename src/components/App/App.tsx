import {
  ArrowLeftIcon,
  ArrowUpToLineIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  FormIcon,
  ListTodoIcon,
  SearchIcon,
  SettingsIcon,
  WallpaperIcon,
} from 'lucide-react'
import { FC } from 'react'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { AppAction } from '../Header/AppAction'
import { AppHeader } from '../Header/AppHeader'
import { AppMenu } from '../Header/AppMenu'
import { AppMenuDivider } from '../Header/AppMenuDivider'
import { AppMenuItem } from '../Header/AppMenuItem'
import { AppSearchButton } from '../Header/AppSearchButton'
import { JumpLinks } from '../JumpLinks/JumpLinks'
import { Links } from '../Links/Links'
import { Search } from '../Search/Search'
import { AppImportExportMenuItems } from './AppImportExportMenuItems'
import { AppInfo } from './AppInfo'
import { AppLayout } from './AppLayout'
import { AppThemeSwitcher } from './AppThemeSwitcher'
import { ExportDialog } from './ExportDialog'
import { ImportDialog } from './ImportDialog'
import { useCustomizeMode } from './useCustomizeMode'
import { useSearchMode } from './useSearchMode'
import { useTheme } from './useTheme'
import { useToggleBackground } from './useToggleBackground'
import { useToggleDescriptions } from './useToggleDescriptions'

function handleScrollTopClick() {
  const mainContentElement = document.getElementById('main-content')
  if (mainContentElement === null) return

  mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
}

export const WebdevHome: FC = () => {
  const customizeMode = useCustomizeMode()
  const searchMode = useSearchMode()
  const toggleDescriptions = useToggleDescriptions()
  const toggleBackground = useToggleBackground()
  const isCurrentAppMode = useIsCurrentAppMode()

  useTheme()

  return (
    <>
      <AppLayout
        header={
          <AppHeader
            centerItems={
              <>
                {isCurrentAppMode(AppMode.default) ? <AppSearchButton /> : null}
              </>
            }
            actions={
              <>
                {isCurrentAppMode(AppMode.default) ? (
                  <>
                    <AppAction
                      icon={<SearchIcon />}
                      label="Search"
                      visible="small-screens"
                      action={searchMode.handleSearchAction}
                    />
                    <AppAction
                      icon={<ArrowUpToLineIcon />}
                      label="Top"
                      action={handleScrollTopClick}
                    />
                  </>
                ) : isCurrentAppMode(AppMode.search) ? (
                  <AppAction
                    icon={<ArrowLeftIcon />}
                    label="Back"
                    highlight
                    action={searchMode.handleSearchAction}
                  />
                ) : isCurrentAppMode(AppMode.customize) ? (
                  <>
                    <AppAction
                      icon={<CheckIcon />}
                      label="Done"
                      highlight
                      action={customizeMode.handleCustomizeAction}
                    />
                    <AppAction
                      icon={<EyeIcon />}
                      label="Show all"
                      action={customizeMode.showAll}
                    />
                    <AppAction
                      icon={<EyeOffIcon />}
                      label="Hide all"
                      action={customizeMode.hideAll}
                    />
                  </>
                ) : null}

                <AppMenu icon={<SettingsIcon />} label="Options">
                  <AppMenuItem
                    label="Customize links"
                    icon={<ListTodoIcon />}
                    action={customizeMode.handleCustomizeAction}
                    visible={isCurrentAppMode(AppMode.default)}
                  />
                  <AppMenuDivider />
                  <AppMenuItem
                    label="Show link info"
                    icon={<FormIcon />}
                    selected={toggleDescriptions.showDescriptions}
                    action={toggleDescriptions.toggle}
                  />
                  <AppMenuItem
                    label="Show background"
                    icon={<WallpaperIcon />}
                    selected={toggleBackground.showBackground}
                    action={toggleBackground.toggle}
                  />

                  <AppThemeSwitcher />
                  <AppImportExportMenuItems />
                  <AppInfo />
                </AppMenu>
              </>
            }
          />
        }
        sidebar={
          <>
            {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
              <JumpLinks />
            ) : null}
          </>
        }
      >
        {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
          <Links />
        ) : (
          <Search />
        )}
      </AppLayout>

      <ImportDialog />
      <ExportDialog />
    </>
  )
}
