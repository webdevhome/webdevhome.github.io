import { mdiFormatListChecks, mdiMagnify } from '@mdi/js'
import React, { FC, useState } from 'react'
import { AppAction } from './components/AppAction'
import { AppActions } from './components/AppActions'
import { AppContent } from './components/AppContent'
import { AppFooter } from './components/AppFooter'
import { AppHeader } from './components/AppHeader'
import { FooterLink } from './components/FooterLink'
import { FooterText } from './components/FooterText'
import { Link } from './components/Link'
import { LinkGroup } from './components/LinkGroup'
import { FooterDivider } from './components/FooterDivider'
import { links } from './links'
import './sass/index.scss'

export const App: FC = () => {
  const [customizeMode, setCustomizeMode] = useState<boolean>(false)

  function handleSearchAction (): void {

  }

  function handleCustomizeAction (): void {
    setCustomizeMode(!customizeMode)
  }

  return (
    <div className="app">
      <AppHeader />

      <AppActions>
        <AppAction icon={mdiMagnify} action={handleSearchAction} />
        <AppAction icon={mdiFormatListChecks} action={handleCustomizeAction} />
      </AppActions>

      <AppContent>
        {links.items.map(group => (
          <LinkGroup name={group.name}>
            {group.items.map(link => (
              <Link
                title={link.title}
                url={link.url}
                icon={link.icon}
                color={link.color}
                customize={customizeMode}
              />
            ))}
          </LinkGroup>
        ))}
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
