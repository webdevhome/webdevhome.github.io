import { mdiFormatListChecks, mdiMagnify, mdiStickerTextOutline } from '@mdi/js'
import React, { FC } from 'react'
import packageJson from '../../../package.json'
import { links, useAllLinks } from '../../links'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { AppFooter } from '../Footer/AppFooter'
import { FooterDivider } from '../Footer/FooterDivider'
import { FooterGroup } from '../Footer/FooterGroup'
import { AppAction } from '../Header/AppAction'
import { AppHeader } from '../Header/AppHeader'
import { AppContent } from '../Layout/AppContent'
import { LinkGroup } from '../Links/LinkGroup'
import { Search } from '../Search/Search'
import './App.scss'
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

  return (
    <div className="app">
      <div className="app__header">
        <AppHeader
          actions={
            <>
              <AppAction
                icon={mdiMagnify}
                active={isCurrentAppMode(AppMode.search)}
                title="Filter links"
                action={searchMode.handleSearchAction}
              />
              <AppAction
                icon={themeSwitcher.icon}
                active={false}
                title={themeSwitcher.title}
                action={themeSwitcher.switchTheme}
              />
              <AppAction
                icon={mdiStickerTextOutline}
                active={toggleDescriptions.showDescriptions}
                title="Toggle descriptions"
                action={toggleDescriptions.toggle}
              />
              <AppAction
                icon={mdiFormatListChecks}
                active={isCurrentAppMode(AppMode.customize)}
                title="Toggle links visibility"
                action={customizeMode.handleCustomizeAction}
              />
            </>
          }
        />
      </div>

      <div className="app__content">
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
                { label: `${allLinks.length} links` },
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
