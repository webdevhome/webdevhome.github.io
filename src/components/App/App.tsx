import {
  mdiArrowCollapseUp,
  mdiArrowLeft,
  mdiCheck,
  mdiCogOutline,
  mdiListStatus,
  mdiMagnify,
  mdiNoteTextOutline,
} from '@mdi/js'
import classNames from 'classnames'
import { FC } from 'react'
import packageJson from '../../../package.json'
import { links, useAllLinks } from '../../links'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { useHiddenLinksCount } from '../../stores/hiddenLinks/hiddenLinksHooks'
import { AppFooter } from '../Footer/AppFooter'
import { FooterDivider } from '../Footer/FooterDivider'
import { FooterGroup } from '../Footer/FooterGroup'
import { AppAction } from '../Header/AppAction'
import { AppHeader } from '../Header/AppHeader'
import { AppMenu } from '../Header/AppMenu'
import { AppMenuItem } from '../Header/AppMenuItem'
import { MdiIcon } from '../Icon/MdiIcon'
import { JumpLinks } from '../JumpLinks/JumpLinks'
import { LinkGroup } from '../Links/LinkGroup'
import { Search } from '../Search/Search'
import { AppContent } from './AppContent'
import { AppThemeSwitcher } from './AppThemeSwitcher'
import { useCustomizeMode } from './useCustomizeMode'
import { useSearchMode } from './useSearchMode'
import { useTheme } from './useTheme'
import { useToggleDescriptions } from './useToggleDescriptions'

export const WebdevHome: FC = () => {
  const customizeMode = useCustomizeMode()
  const searchMode = useSearchMode()
  const toggleDescriptions = useToggleDescriptions()
  const isCurrentAppMode = useIsCurrentAppMode()
  const allLinks = useAllLinks()
  const hiddenLinksCount = useHiddenLinksCount()

  useTheme()

  function handleScrollTopClick() {
    const htmlEl = document.children.item(0)
    if (htmlEl === null) return

    htmlEl.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-full">
      <div
        className={classNames(
          'sticky top-0 left-0 right-0',
          'bg-gray-200 supports-backdrop:bg-gray-100/75',
          'dark:bg-gray-900 dark:supports-backdrop:bg-gray-900/70',
          'border-b border-gray-300 dark:border-gray-600',
          'supports-backdrop:backdrop-blur',
        )}
      >
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

                    <AppThemeSwitcher />
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
      </div>

      <div className="h-full">
        {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
          <>
            <JumpLinks />
            <AppContent>
              {links.items.map((group, index) => (
                <LinkGroup group={group} key={group.name} />
              ))}
            </AppContent>
          </>
        ) : (
          <Search />
        )}

        {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
          <AppFooter>
            <FooterGroup
              title={`WebdevHome v${packageJson.version}`}
              items={[
                {
                  label: `${allLinks.length} links / ${hiddenLinksCount} hidden`,
                },
                {
                  label: 'Changelog',
                  href: 'https://github.com/webdevhome/webdevhome.github.io/releases',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/webdevhome/webdevhome.github.io',
                },
              ]}
            />

            <FooterDivider />

            <FooterGroup
              title="Icons"
              items={[
                {
                  label: 'Material Design Icons',
                  href: 'https://materialdesignicons.com',
                },
                {
                  label: 'Simple Icons',
                  href: 'https://simpleicons.org/',
                },
              ]}
            />
          </AppFooter>
        ) : null}
      </div>
    </div>
  )
}
