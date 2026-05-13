import { type FC } from 'react'
import type { IconSizeData } from './getIconSize.ts'

type Props = {
  path: string
  iconSize: IconSizeData
}

export const SimpleIcons: FC<Props> = ({ path, iconSize }) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconSize.className}>
      <path d={path}></path>
    </svg>
  )
}
