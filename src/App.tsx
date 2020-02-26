import { mdiFormatListChecks, mdiMagnify } from '@mdi/js'
import React, { FC, useEffect, useState } from 'react'
import { AppAction } from './components/AppAction'
import { AppActions } from './components/AppActions'
import { AppContent } from './components/AppContent'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'
import { FooterDivider } from './components/FooterDivider'
import { FooterLink } from './components/FooterLink'
import { FooterText } from './components/FooterText'
import { LinkList } from './components/LinkList'
import { Search } from './components/Search'
import { links } from './links'
import { setMode, toggleMode, useCurrentMode, AppMode } from './stores/currentModeStore'
import { HiddenLinks, useHiddenLinks } from './stores/hiddenLinksStore'

export const WebdevHome: FC = () => {
  const { handleCustomizeAction, hiddenLinks } = useCustomizeFeature()
  const { handleSearchAction, latestKeypress } = useSearchFeature()
  const { mode } = useCurrentMode()

  return (
    <div className="app">
      <AppHeader />

      <AppActions>
        <AppAction
          icon={mdiMagnify}
          action={handleSearchAction}
          active={mode === AppMode.search}
        />
        <AppAction
          icon={mdiFormatListChecks}
          action={handleCustomizeAction}
          active={mode === AppMode.customize}
        />
      </AppActions>

      {mode === AppMode.default || mode === AppMode.customize ? (
        <AppContent>
          <LinkList links={links.items} hiddenLinks={hiddenLinks.links} />
        </AppContent>
      ) : (
        <Search latestKeypress={latestKeypress} />
      )}

      <AppFooter>
        <FooterText>
          This list is curated by <a href="https://github.com/alinnert">Andreas Linnert</a>
        </FooterText>
        <FooterLink
          text="GitHub"
          url="https://github.com/webdevhome/webdevhome.github.io"
        />
        <FooterDivider/>
        <FooterText>Used icons:</FooterText>
        <FooterLink
          text="Material Design Icons"
          url="https://materialdesignicons.com"
        />
        <FooterLink
          text="Simple Icons"
          url="https://simpleicons.org/"
        />
      </AppFooter>
    </div>
  )
}

// #region customize feature
interface CustomizeFeature {
  hiddenLinks: HiddenLinks
  handleCustomizeAction (): void
}

function useCustomizeFeature (): CustomizeFeature {
  const hiddenLinks = useHiddenLinks()

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeydown)

    function handleGlobalKeydown (event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setMode(AppMode.default)
      }
    }
  }, [])

  function handleCustomizeAction (): void {
    toggleMode(AppMode.customize)
  }

  return { hiddenLinks, handleCustomizeAction }
}
// #endregion customize feature

// #region search feature
interface SearchFeature {
  handleSearchAction (): void
  latestKeypress: string
}

function useSearchFeature (): SearchFeature {
  const [latestKeypress, setLatestKeypress] = useState<string>('')
  const { mode } = useCurrentMode()

  useEffect(() => {
    window.addEventListener('keydown', handleGlobalKeydown)
    window.addEventListener('keypress', handleGlobalKeypress)

    function handleGlobalKeydown (event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setMode(AppMode.default)
      }
    }

    function handleGlobalKeypress (event: KeyboardEvent): void {
      if (mode === AppMode.default) {
        setLatestKeypress(event.key)
        setMode(AppMode.search)
      }
    }

    return (): void => {
      window.removeEventListener('keydown', handleGlobalKeydown)
      window.removeEventListener('keypress', handleGlobalKeypress)
    }
  }, [mode])

  function handleSearchAction (): void {
    setLatestKeypress('')
    toggleMode(AppMode.search)
  }

  return { handleSearchAction, latestKeypress }
}
// #endregion search feature
