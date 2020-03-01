import { mdiEye, mdiEyeOff } from '@mdi/js'
import React, { FC, memo, MouseEvent } from 'react'
import { ReactSVG } from 'react-svg'
import { toggleLink } from '../stores/hiddenLinksStore'
import { classes } from '../utils/jsx'
import { DefaultIcon } from './DefaultIcon'
import { MdiIcon } from './MdiIcon'

interface LinkProps {
  title: string
  url: string
  icon?: string
  color?: string
  searchable?: boolean
  customize?: boolean
  visible?: boolean
  focus?: boolean
}

export const Link: FC<LinkProps> = memo(({
  title, url, icon, color, searchable = false,
  customize = false, visible = true, focus = false
}) => {
  function handleLinkClick (event: MouseEvent<HTMLAnchorElement>): void {
    if (customize) {
      event.preventDefault()
      toggleLink(url)
    }
  }

  const linkClasses = {
    link: true,
    'link--is-visible': visible,
    'link--has-focus': focus
  }

  if (!customize && !visible) return null

  return (
    <a href={url} className={classes(linkClasses)} onClick={handleLinkClick}>
      <div className="link__icon-container" style={{ color }}>
        {icon !== undefined ? (
          <ReactSVG src={getIconUrl(icon)} className="link__icon" />
        ) : (
          <DefaultIcon />
        )}
      </div>

      <div className="link__label">{title}</div>

      {searchable ? (
        <div className="link__info">
          <span className="link__info-text">
            <kbd>Tab</kbd>: Search on site
          </span>
        </div>
      ) : null}

      {customize ? (
        <div className="link__action">
          <MdiIcon path={visible ? mdiEye : mdiEyeOff} />
        </div>
      ) : null}
    </a>
  )
})

function getIconUrl (icon: string): string {
  return `${process.env.REACT_APP_PUBLIC_URL ?? ''}/simple-icons/${icon}.svg`
}
