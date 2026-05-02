import classNames from 'classnames'
import { type FC } from 'react'
import { ReactSVG } from 'react-svg'
import { DefaultIcon } from '../ui/DefaultIcon.tsx'
import { getIconUrl } from '../utils/getIconUrl.ts'

type Props = {
  icon: string | undefined
  color: string | undefined
}

export const LinkItemIcon: FC<Props> = ({ icon, color }) => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'p-1',
        'bg-[linear-gradient(to_bottom_right,hsl(from_currentcolor_h_s_98%),hsl(from_currentcolor_h_s_94%))]',
        'dark:bg-[linear-gradient(to_bottom_right,hsl(from_currentcolor_h_calc(s*0.25)_90%),hsl(from_currentcolor_h_calc(s*0.25)_70%))]',
        'shadow-[0_1px_2px_rgb(from_black_r_g_b/25%),1px_1px_1px_rgb(from_white_r_g_b/50%)_inset]',
        'rounded-md',
      )}
      style={{
        color: `light-dark(${color ?? 'silver'}, hsl(from ${color ?? 'silver'} h calc(s * 0.9) calc(l * 0.5 + 10)))`,
      }}
    >
      {icon === undefined ? (
        <DefaultIcon />
      ) : (
        <ReactSVG
          src={getIconUrl(icon)}
          className="h-[27px] w-[27px] fill-current"
        />
      )}
    </div>
  )
}
