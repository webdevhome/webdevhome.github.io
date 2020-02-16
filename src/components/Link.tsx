import Icon from '@mdi/react'
import React, { FC, memo, useState, MouseEvent } from 'react'
import { get as getIcon } from 'simple-icons'
import { DefaultIcon } from './DefaultIcon'
import { mdiEye, mdiEyeOff } from '@mdi/js'

interface LinkProps {
  title: string
  url: string
  icon?: string
  color?: string
  customize: boolean
}

export const Link: FC<LinkProps> = memo(({
  title, url, icon, color, customize
}) => {
  const [visible, setVisible] = useState<boolean>(true)

  function handleLinkClick (event: MouseEvent<HTMLAnchorElement>): void {
    if (customize) {
      event.preventDefault()
      setVisible(!visible)
    }
  }

  if (!customize && !visible) return null

  return (
    <a href={url} className="link" onClick={handleLinkClick}>
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
