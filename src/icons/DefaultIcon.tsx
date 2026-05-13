import classNames from 'classnames'
import { SquircleDashedIcon } from 'lucide-react'
import { type FC } from 'react'
import { defaultIconSize, type IconSizeData } from './getIconSize.ts'

type Props = {
  iconSize?: IconSizeData
}

export const DefaultIcon: FC<Props> = ({ iconSize = defaultIconSize }) => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-current',
        'h-[24px] w-[24px]',
        iconSize.className,
      )}
    >
      <SquircleDashedIcon size={iconSize.pixels} />
    </div>
  )
}
