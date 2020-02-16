import { mdiFormatListChecks, mdiMagnify } from '@mdi/js'
import React, { FC, useEffect } from 'react'
import { AppAction } from './components/AppAction'
import { AppActions } from './components/AppActions'
import { AppContent } from './components/AppContent'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'
import { FooterDivider } from './components/FooterDivider'
import { FooterLink } from './components/FooterLink'
import { FooterText } from './components/FooterText'
import { Link } from './components/Link'
import { LinkGroup } from './components/LinkGroup'
import { LinkGroup as ILinkGroup, links } from './links'
import { HiddenLinks, useHiddenLinks } from './stores/hiddenLinksStore'
import { useCurrentMode, setMode, toggleMode } from './stores/currentModeStore'

export const App: FC = () => {
  const { handleCustomizeAction, hiddenLinks } = useCustomizeFeature()
  const { handleSearchAction } = useSearchFeature()
  const { mode } = useCurrentMode()

  function getLinkGroup (group: ILinkGroup): JSX.Element | null {
    const noVisibleLinksInGroup = group.items
      .every(link => hiddenLinks.links.includes(link.url))

    if (noVisibleLinksInGroup && mode !== 'customize') { return null }

    return (
      <LinkGroup key={group.name} name={group.name}>
        {group.items.map(link => (
          <Link
            key={link.url}
            title={link.title}
            url={link.url}
            icon={link.icon}
            color={link.color}
            customize={mode === 'customize'}
            visible={!hiddenLinks.links.includes(link.url)}
          />
        ))}
      </LinkGroup>
    )
  }

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

      <AppContent>
        {links.items.map(getLinkGroup)}
      </AppContent>

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
}

function useSearchFeature (): SearchFeature {
  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeydown)
    document.addEventListener('keypress', handleGlobalKeypress)

    function handleGlobalKeydown (event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setMode('default')
      }
    }

    function handleGlobalKeypress (event: KeyboardEvent): void {
      // TODO: pwease, impwement me!
    }
  }, [])

  function handleSearchAction (): void {
    toggleMode('search')
  }

  return { handleSearchAction }
}
// #endregion search feature
