import {
  mdiFormatListChecks,
  mdiMagnify
} from '@mdi/js'
import React, { FC } from 'react'
import { version } from '../../../package.json'
import { links } from '../../links'
import { useIsCurrentAppMode } from '../../stores/appMode/appModeHooks'
import { AppMode } from '../../stores/appMode/appModeReducer'
import { AppFooter } from '../Footer/AppFooter'
import { FooterDivider } from '../Footer/FooterDivider'
import { FooterGroup } from '../Footer/FooterGroup'
import { FooterLink } from '../Footer/FooterLink'
import { AppAction } from '../Header/AppAction'
import { AppActions } from '../Header/AppActions'
import { AppHeader } from '../Header/AppHeader'
import { AppContent } from '../Layout/AppContent'
import { LinkGroup } from '../Links/LinkGroup'
import { Search } from '../Search/Search'
import './App.scss'
import { useCustomizeMode } from './useCustomizeMode'
import { useSearchMode } from './useSearchMode'
import { useThemeSwitcher } from './useThemeSwitcher'

export const WebdevHome: FC = () => {
  const customizeMode = useCustomizeMode()
  const searchMode = useSearchMode()
  const themeSwitcher = useThemeSwitcher()
  const isCurrentAppMode = useIsCurrentAppMode()

  return (
    <div className="app">
      <AppHeader />

      <AppActions>
        <AppAction
          icon={mdiMagnify}
          action={searchMode.handleSearchAction}
          active={isCurrentAppMode(AppMode.search)}
        />
        <AppAction
          icon={themeSwitcher.icon}
          action={themeSwitcher.switchTheme}
          active={false}
        />
        <AppAction
          icon={mdiFormatListChecks}
          action={customizeMode.handleCustomizeAction}
          active={isCurrentAppMode(AppMode.customize)}
        />
      </AppActions>

      {isCurrentAppMode(AppMode.default, AppMode.customize) ? (
        <AppContent>
          {links.items.map((group) => (
            <LinkGroup group={group} key={group.name} />
          ))}
        </AppContent>
      ) : (
        <Search />
      )}

      <AppFooter>
        <FooterGroup title={'WebdevHome v' + version}>
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
    </div>
  )
}
