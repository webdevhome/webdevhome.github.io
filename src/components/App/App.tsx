import {
  mdiArrowCollapseUp,
  mdiArrowLeft,
  mdiCheck,
  mdiCogOutline,
  mdiDockLeft,
  mdiListStatus,
  mdiMagnify,
  mdiNoteTextOutline,
} from '@mdi/js'
import { FC } from 'react'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { AppAction } from '../Header/AppAction'
import { AppHeader } from '../Header/AppHeader'
import { AppMenu } from '../Header/AppMenu'
import { AppMenuItem } from '../Header/AppMenuItem'
import { MdiIcon } from '../Icon/MdiIcon'
import { JumpLinks } from '../JumpLinks/JumpLinks'
import { Links } from '../Links/Links'
import { Search } from '../Search/Search'
import { AppInfo } from './AppInfo'
import { AppLayout } from './AppLayout'
import { AppThemeSwitcher } from './AppThemeSwitcher'
import { useCustomizeMode } from './useCustomizeMode'
import { useSearchMode } from './useSearchMode'
import { useTheme } from './useTheme'
import { useToggleDescriptions } from './useToggleDescriptions'
import { useToggleJumpLinks } from './useToggleJumpLinks'

export const WebdevHome: FC = () => {
  const customizeMode = useCustomizeMode()
  const searchMode = useSearchMode()
  const toggleDescriptions = useToggleDescriptions()
  const toggleJumpLinks = useToggleJumpLinks()
  const isCurrentAppMode = useIsCurrentAppMode()

  useTheme()

  function handleScrollTopClick() {
    const htmlEl = document.children.item(0)
    if (htmlEl === null) return

    htmlEl.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AppLayout
      sidebar={
        isCurrentAppMode(AppMode.default, AppMode.customize) && toggleJumpLinks.showJumpLinks ? (
          <JumpLinks />
        ) : null
      }
      header={
        <AppHeader
          actions={
            <>
              {isCurrentAppMode(AppMode.default) ? (
                <>
                  <AppAction
                    icon={mdiArrowCollapseUp}
                    label="Top"
                    action={handleScrollTopClick}
                  />
                  <AppAction
                    icon={mdiMagnify}
                    label="Search"
                    action={searchMode.handleSearchAction}
                  />
                  <AppMenu icon={mdiCogOutline} label="Options">
                    <AppMenuItem
                      label="Customize links"
                      icon={<MdiIcon path={mdiListStatus} />}
                      action={customizeMode.handleCustomizeAction}
                    />
                    <AppMenuItem
                      label="Show link info"
                      icon={<MdiIcon path={mdiNoteTextOutline} />}
                      selected={toggleDescriptions.showDescriptions}
                      action={toggleDescriptions.toggle}
                    />
                    <AppMenuItem
                      label="Show group list"
                      icon={<MdiIcon path={mdiDockLeft} />}
                      selected={toggleJumpLinks.showJumpLinks}
                      action={toggleJumpLinks.toggle}
                    />

                    <AppThemeSwitcher />
                    <AppInfo />
                  </AppMenu>
                </>
              ) : isCurrentAppMode(AppMode.search) ? (
                <>
                  <AppAction
                    icon={mdiArrowLeft}
                    label="Back"
                    highlight
                    action={searchMode.handleSearchAction}
                  />
                  <AppMenu icon={mdiCogOutline} label="Options">
                    <AppMenuItem
                      label="Show link info"
                      icon={<MdiIcon path={mdiNoteTextOutline} />}
                      selected={toggleDescriptions.showDescriptions}
                      action={toggleDescriptions.toggle}
                    />

                    <AppThemeSwitcher />
                  </AppMenu>
                </>
              ) : isCurrentAppMode(AppMode.customize) ? (
                <>
                  <AppAction
                    icon={mdiCheck}
                    label="Done"
                    highlight
                    action={customizeMode.handleCustomizeAction}
                  />
                  <AppMenu icon={mdiCogOutline} label="Options">
                    <AppMenuItem
                      label="Show link info"
                      icon={<MdiIcon path={mdiNoteTextOutline} />}
                      selected={toggleDescriptions.showDescriptions}
                      action={toggleDescriptions.toggle}
                    />

                    <AppThemeSwitcher />
                  </AppMenu>
                </>
              ) : null}
            </>
          }
        />
      }
    >
      {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
        <Links />
      ) : (
        <Search />
      )}
    </AppLayout>
  )
}
