import {
  mdiArrowCollapseUp,
  mdiArrowLeft,
  mdiCheck,
  mdiCogOutline,
  mdiImage,
  mdiListStatus,
  mdiNoteTextOutline
} from '@mdi/js'
import { FC } from 'react'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { AppAction } from '../Header/AppAction'
import { AppHeader } from '../Header/AppHeader'
import { AppMenu } from '../Header/AppMenu'
import { AppMenuDivider } from '../Header/AppMenuDivider'
import { AppMenuItem } from '../Header/AppMenuItem'
import { AppSearchButton } from '../Header/AppSearchButton'
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
import { useToggleBackground } from './useToggleBackground'
import { useToggleDescriptions } from './useToggleDescriptions'
import { useToggleJumpLinks } from './useToggleJumpLinks'

export const WebdevHome: FC = () => {
  const customizeMode = useCustomizeMode()
  const searchMode = useSearchMode()
  const toggleDescriptions = useToggleDescriptions()
  const toggleJumpLinks = useToggleJumpLinks()
  const toggleBackground = useToggleBackground()
  const isCurrentAppMode = useIsCurrentAppMode()

  useTheme()

  function handleScrollTopClick() {
    const mainContentElement = document.getElementById('main-content')
    if (mainContentElement === null) return

    mainContentElement.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AppLayout
      sidebar={
        isCurrentAppMode(AppMode.default, AppMode.customize) &&
        toggleJumpLinks.showJumpLinks || toggleJumpLinks.showJumpLinksMobile ? (
          <JumpLinks />
        ) : null
      }
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
                    icon={mdiArrowCollapseUp}
                    label="Top"
                    action={handleScrollTopClick}
                  />
                </>
              ) : isCurrentAppMode(AppMode.search) ? (
                <>
                  <AppAction
                    icon={mdiArrowLeft}
                    label="Back"
                    highlight
                    action={searchMode.handleSearchAction}
                  />
                </>
              ) : isCurrentAppMode(AppMode.customize) ? (
                <>
                  <AppAction
                    icon={mdiCheck}
                    label="Done"
                    highlight
                    action={customizeMode.handleCustomizeAction}
                  />
                </>
              ) : null}

              <AppMenu icon={mdiCogOutline} label="Options">
                <AppMenuItem
                  label="Customize links"
                  icon={<MdiIcon path={mdiListStatus} />}
                  action={customizeMode.handleCustomizeAction}
                  visible={isCurrentAppMode(AppMode.default)}
                />
                <AppMenuDivider />
                <AppMenuItem
                  label="Show link info"
                  icon={<MdiIcon path={mdiNoteTextOutline} />}
                  selected={toggleDescriptions.showDescriptions}
                  action={toggleDescriptions.toggle}
                />
                <AppMenuItem
                  label="Show background"
                  icon={<MdiIcon path={mdiImage} />}
                  selected={toggleBackground.showBackground}
                  action={toggleBackground.toggle}
                />

                <AppThemeSwitcher />
                <AppInfo />
              </AppMenu>
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
