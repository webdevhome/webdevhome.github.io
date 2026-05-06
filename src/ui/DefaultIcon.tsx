import classNames from 'classnames'
import { SquircleDashedIcon } from 'lucide-react'
import { type FC } from 'react'
import { defaultIconSize, type IconSize } from './getIconSize.ts'

type Props = {
  color?: string
  iconSize?: IconSize
}

export const DefaultIcon: FC<Props> = ({
  color = 'black',
  iconSize = defaultIconSize,
}) => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-current',
        'h-[24px] w-[24px]',
        iconSize.className,
      )}
    >
      <SquircleDashedIcon color={color} size={iconSize.pixels} />
    </div>
  )
}
