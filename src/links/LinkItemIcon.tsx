import classNames from 'classnames'
import { type FC } from 'react'
import { DefaultIcon } from '../icons/DefaultIcon.tsx'
import { SimpleIcons } from '../icons/SimpleIcons.tsx'
import { useIcon } from '../icons/useIcon.ts'

type Props = {
  icon: string | undefined
  color?: string
  size?: 'default' | 'large'
}

export const LinkItemIcon: FC<Props> = ({ icon, color, size = 'default' }) => {
  const iconData = useIcon(icon)

  if (icon?.startsWith('path:')) {
    console.log(icon)

    fetch(icon.split(':')[1])
      .then(({ text }) => text())
      .then((iconContent) => {
        console.log(iconContent)
      })
  }

  const cssColorValue = (() => {
    if (color !== undefined) {
      return color
    }

    if (icon !== undefined && iconData !== null && iconData.type === 'si') {
      return `#${iconData.hex}`
    }

    return 'dimgray'
  })()

  const svgColor = `light-dark(${cssColorValue}, hsl(from ${cssColorValue} h calc(s * 0.9) calc(l * 0.5 + 10)))`

  const iconElement = (() => {
    if (iconData !== null && iconData.type === 'si') {
      return <SimpleIcons path={iconData.path} size={size} />
    }

    return <DefaultIcon size={size} />
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
