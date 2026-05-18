import classNames from 'classnames'
import { SquircleDashedIcon } from 'lucide-react'
import { type FC } from 'react'
import { useIconShadow } from './useIconShadow.ts'
import { useIconSizeData, type IconSize } from './useIconSizeData.ts'

type Props = {
  size?: IconSize
}

export const DefaultIcon: FC<Props> = ({ size = 'default' }) => {
  const iconSizeData = useIconSizeData(size)
  const iconShadow = useIconShadow(size)

  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-current',
        'h-[24px] w-[24px]',
        iconSizeData.className,
      )}
    >
      <SquircleDashedIcon
        size={iconSizeData.pixels}
        style={{ filter: iconShadow }}
      />
    </div>
  )
}
