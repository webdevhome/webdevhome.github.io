import classNames from 'classnames'
import { SquircleDashedIcon } from 'lucide-react'
import { type FC } from 'react'

export const DefaultIcon: FC = () => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-current',
        'h-[27px] w-[27px]',
      )}
    >
      <SquircleDashedIcon />
    </div>
  )
}
