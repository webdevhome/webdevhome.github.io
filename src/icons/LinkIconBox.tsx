import classNames from 'classnames'
import { type FC } from 'react'
import type { IconSize } from './getIconSize.ts'
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

  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        {
          'p-1': size === 'default',
          'p-4': size === 'large',
        },
        'bg-[linear-gradient(to_bottom_right,hsl(from_currentcolor_h_s_98%),hsl(from_currentcolor_h_s_94%))]',
        'dark:bg-[linear-gradient(to_bottom_right,hsl(from_currentcolor_h_calc(s*0.25)_90%),hsl(from_currentcolor_h_calc(s*0.25)_70%))]',
        'shadow-[0_1px_2px_rgb(from_black_r_g_b/25%),1px_1px_1px_rgb(from_white_r_g_b/50%)_inset]',
        '[corner-shape:squircle]',
        {
          'rounded-md supports-[corner-shape:squircle]:rounded-xl':
            size === 'default',
          'rounded-3xl supports-[corner-shape:squircle]:rounded-full':
            size === 'large',
        },
      )}
      style={{ color: iconColor }}
    >
      <LinkIcon
        size={size}
        iconData={iconData}
      />
    </div>
  )
}
