import { mdiEye, mdiEyeOff } from '@mdi/js'
import Icon from '@mdi/react'
import React, { FC, memo, MouseEvent } from 'react'
import { get as getIcon } from 'simple-icons'
import { DefaultIcon } from './DefaultIcon'
import { toggleLink } from '../stores/hiddenLinksStore'
import { classes } from '../utils/jsx'

interface LinkProps {
  title: string
  url: string
  icon?: string
  color?: string
  customize?: boolean
  visible?: boolean
  focus?: boolean
}

export const Link: FC<LinkProps> = memo(({
  title, url, icon, color, customize = false, visible = true, focus = false
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
          <Icon path={getIcon(icon).path} size={1} color={color} />
        ) : (
          <DefaultIcon />
        )}
      </div>
      <div className="link__label">{title}</div>
      {customize ? (
        <div className="link__action">
          {visible ? (
            <Icon path={mdiEye} size={1} />
          ) : (
            <Icon path={mdiEyeOff} size={1} />
          )}
        </div>
      ) : null}
    </a>
  )
})
