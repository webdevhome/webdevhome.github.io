import {
  mdiArrowLeft,
  mdiCheck,
  mdiFormatListChecks,
  mdiMagnify,
  mdiStickerTextOutline,
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
import { LinkGroup } from '../Links/LinkGroup'
import { Search } from '../Search/Search'
import { AppContent } from './AppContent'
import { useCustomizeMode } from './useCustomizeMode'
import { useSearchMode } from './useSearchMode'
import { useThemeSwitcher } from './useThemeSwitcher'
import { useToggleDescriptions } from './useToggleDescriptions'

export const WebdevHome: FC = () => {
  const customizeMode = useCustomizeMode()
  const searchMode = useSearchMode()
  const themeSwitcher = useThemeSwitcher()
  const toggleDescriptions = useToggleDescriptions()
  const isCurrentAppMode = useIsCurrentAppMode()
  const allLinks = useAllLinks()
  const hiddenLinksCount = useHiddenLinksCount()

  return (
    <div className="min-h-full">
      <div
        className={classNames(
          'sticky top-0 left-0 right-0',
          'bg-white supports-backdrop:bg-white/75',
          'dark:bg-gray-900 dark:supports-backdrop:bg-gray-900/70',
          'border-b border-b-black/25',
          'shadow-lg',
          'supports-backdrop:backdrop-blur',
        )}
      >
        <AppHeader
          actions={
            <>
              {isCurrentAppMode(AppMode.default) ? (
                <>
                  <AppAction
                    icon={mdiMagnify}
                    label="Search"
                    action={searchMode.handleSearchAction}
                  />
                  <AppAction
                    icon={themeSwitcher.icon}
                    active={false}
                    label={themeSwitcher.title}
                    action={themeSwitcher.switchTheme}
                  />
                  <AppAction
                    icon={mdiStickerTextOutline}
                    active={toggleDescriptions.showDescriptions}
                    label="Descriptions"
                    action={toggleDescriptions.toggle}
                  />
                  <AppAction
                    icon={mdiFormatListChecks}
                    label="Customize"
                    action={customizeMode.handleCustomizeAction}
                  />
                </>
              ) : isCurrentAppMode(AppMode.search) ? (
                <>
                  <AppAction
                    icon={mdiArrowLeft}
                    active
                    label="Back"
                    action={searchMode.handleSearchAction}
                  />
                </>
              ) : isCurrentAppMode(AppMode.customize) ? (
                <>
                  <AppAction
                    icon={mdiCheck}
                    active
                    label="Done"
                    action={customizeMode.handleCustomizeAction}
                  />
                </>
              ) : null}
            </>
          }
        />
      </div>

      <div className="h-full">
        {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
          <AppContent>
            {links.items.map((group) => (
              <LinkGroup group={group} key={group.name} />
            ))}
          </AppContent>
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
