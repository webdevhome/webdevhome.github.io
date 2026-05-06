import classNames from 'classnames'
import { type FC } from 'react'
import { DefaultIcon } from '../ui/DefaultIcon.tsx'
import { getIconSize } from '../ui/getIconSize.ts'
import { SvgIcon } from '../ui/SvgIcon.tsx'
import type { LinkItem } from './links.ts'

type Props = {
  icon: LinkItem['icon']
  color: LinkItem['color']
  size?: 'default' | 'large'
}

export const LinkItemIcon: FC<Props> = ({ icon, color, size = 'default' }) => {
  const cssColorValue = (() => {
    if (color !== undefined) {
      return color
    }

    if (icon !== undefined) {
      return `#${icon.hex}`
    }

    return 'dimgray'
  })()

  const svgColor = `light-dark(${cssColorValue}, hsl(from ${cssColorValue} h calc(s * 0.9) calc(l * 0.5 + 10)))`

  const iconSize = getIconSize(size)

  const iconElement = (() => {
    if (icon === undefined) {
      return <DefaultIcon color={svgColor} iconSize={iconSize} />
    }

    return <SvgIcon path={icon.path} color={svgColor} iconSize={iconSize} />
  })()

  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        {
          'p-1': size === 'default',
          'p-5': size === 'large',
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
      style={{ color: svgColor }}
    >
      {iconElement}
    </div>
  )
}
