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
import { setMode, toggleMode, useCurrentMode } from './stores/currentModeStore'
import { HiddenLinks, useHiddenLinks } from './stores/hiddenLinksStore'

export const App: FC = () => {
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
          active={mode === 'search'}
        />
        <AppAction
          icon={mdiFormatListChecks}
          action={handleCustomizeAction}
          active={mode === 'customize'}
        />
      </AppActions>

      {mode === 'default' || mode === 'customize' ? (
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
          text="//webdev/home on GitHub"
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
        setMode('default')
      }
    }
  }, [])

  function handleCustomizeAction (): void {
    toggleMode('customize')
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
        setMode('default')
      }
    }

    function handleGlobalKeypress (event: KeyboardEvent): void {
      setLatestKeypress(event.key)

      if (mode === 'default') {
        setMode('search')
      }
    }

    return (): void => {
      window.removeEventListener('keydown', handleGlobalKeydown)
      window.removeEventListener('keypress', handleGlobalKeypress)
    }
  }, [mode])

  function handleSearchAction (): void {
    setLatestKeypress('')
    toggleMode('search')
  }

  return { handleSearchAction, latestKeypress }
}
// #endregion search feature
