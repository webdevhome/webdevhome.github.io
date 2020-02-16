import { mdiFormatListChecks, mdiMagnify } from '@mdi/js'
import React, { FC, useState, useEffect } from 'react'
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
import { links, LinkGroup as ILinkGroup } from './links'
import { useHiddenLinks, HiddenLinks } from './stores/hiddenLinksStore'

export const App: FC = () => {
  const {
    handleCustomizeAction,
    hiddenLinks,
    customizeMode
  } = useCustomizeFeature()

  const {
    handleSearchAction
  } = useSearchFeature()

  function getLinkGroup (group: ILinkGroup): JSX.Element | null {
    const noVisibleLinksInGroup = group.items
      .every(link => hiddenLinks.links.includes(link.url))

    if (noVisibleLinksInGroup && !customizeMode) { return null }

    return (
      <LinkGroup key={group.name} name={group.name}>
        {group.items.map(link => (
          <Link
            key={link.url}
            title={link.title}
            url={link.url}
            icon={link.icon}
            color={link.color}
            customize={customizeMode}
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
          active={false}
        />
        <AppAction
          icon={mdiFormatListChecks}
          action={handleCustomizeAction}
          active={customizeMode}
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
  customizeMode: boolean
  handleCustomizeAction (): void
}

function useCustomizeFeature (): CustomizeFeature {
  const [customizeMode, setCustomizeMode] = useState<boolean>(false)
  const hiddenLinks = useHiddenLinks()

  useEffect(() => {
    document.addEventListener('keydown', handleGlobalKeydown)
  }, [])

  function handleCustomizeAction (): void {
    setCustomizeMode(!customizeMode)
  }

  function handleGlobalKeydown (this: Document, event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      setCustomizeMode(false)
    }
  }

  return { hiddenLinks, handleCustomizeAction, customizeMode }
}
// #endregion customize feature

// #region search feature
interface SearchFeature {
  handleSearchAction (): void
}

function useSearchFeature (): SearchFeature {
  function handleSearchAction (): void {
    // TODO: pwease, impwement me! (｡◕‿‿◕｡)
  }

  return { handleSearchAction }
}
// #endregion search feature
