import classNames from 'classnames'
import { type FC } from 'react'
import { defaultIconSize, type IconSize } from './getIconSize.ts'

type Props = {
  path: string
  color?: string
  iconSize?: IconSize
}

export const SvgIcon: FC<Props> = ({
  path,
  color,
  iconSize = defaultIconSize,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      className={classNames('h-[24px] w-[24px]', iconSize.className)}
      style={{ fill: color ?? 'currentColor' }}
    >
      <path d={path}></path>
    </svg>
  )
}
