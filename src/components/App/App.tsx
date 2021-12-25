import { mdiFormatListChecks, mdiMagnify, mdiStickerTextOutline } from '@mdi/js'
import React, { FC } from 'react'
import packageJson from '../../../package.json'
import { links } from '../../links'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { AppFooter } from '../Footer/AppFooter'
import { FooterDivider } from '../Footer/FooterDivider'
import { FooterGroup } from '../Footer/FooterGroup'
import { FooterLink } from '../Footer/FooterLink'
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
            <FooterGroup title={'WebdevHome v' + packageJson.version}>
              <FooterLink
                text="Changelog"
                url="https://github.com/webdevhome/webdevhome.github.io/releases"
              />
              <FooterLink
                text="GitHub"
                url="https://github.com/webdevhome/webdevhome.github.io"
              />
            </FooterGroup>

            <FooterDivider />

            <FooterGroup title="Icons">
              <FooterLink
                text="Material Design Icons"
                url="https://materialdesignicons.com"
              />
              <FooterLink text="Simple Icons" url="https://simpleicons.org/" />
            </FooterGroup>
          </AppFooter>
        ) : null}
      </div>
    </div>
  )
}
