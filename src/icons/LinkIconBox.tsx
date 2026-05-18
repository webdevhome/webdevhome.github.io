import classNames from 'classnames'
import { type FC } from 'react'
import type { IconSize } from './useIconSizeData.ts'
import { LinkIcon } from './LinkIcon.tsx'
import { useIcon } from './useIcon.ts'
import { useIconColor } from './useIconColor.ts'

type Props = {
  iconString: string | undefined
  color?: string
  size?: IconSize
}

export const LinkIconBox: FC<Props> = ({
  iconString,
  color,
  size = 'default',
}) => {
  const iconData = useIcon(iconString)
  const iconColor = useIconColor({ color, iconData })

  const boxShadow =
    size === 'default'
      ? '0 0 1px hsl(from currentColor h 100 30 / 0.3), 0 1px 4px -1px hsl(from currentColor h 100 20 / 0.5), 0 0 1px 1px rgb(from white r g b / 0.5) inset'
      : '0 0 1px hsl(from currentColor h 100 30 / 0.5), 0 6px 40px rgb(from black r g b / 0.2), 0 0 4px 1px rgb(from white r g b / 1) inset'

  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        {
          'p-1': size === 'default',
          'p-4': size === 'large',
        },
        'bg-[linear-gradient(to_bottom,hsl(from_currentcolor_calc(h+20)_s_93%)_50%,hsl(from_currentcolor_calc(h+20)_s_85%))]',
        'dark:bg-[linear-gradient(to_bottom,hsl(from_currentcolor_calc(h+20)_calc(s*0.4)_85%)_50%,hsl(from_currentcolor_calc(h+20)_calc(s*0.4)_70%))]',
        '[corner-shape:squircle]',
        {
          'rounded-md supports-[corner-shape:squircle]:rounded-xl':
            size === 'default',
          'rounded-3xl supports-[corner-shape:squircle]:rounded-full':
            size === 'large',
        },
      )}
      style={{ color: iconColor, boxShadow }}
    >
      <LinkIcon size={size} iconData={iconData} />
    </div>
  )
}
