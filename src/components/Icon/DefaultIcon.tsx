import classNames from 'classnames'
import { Link2Icon } from 'lucide-react'
import { FC } from 'react'

export const DefaultIcon: FC = () => {
  return (
    <div
      className={classNames(
        'grid items-center justify-center',
        'text-gray-300 dark:text-gray-400',
        'h-[27px] w-[27px]',
      )}
    >
      <Link2Icon />
    </div>
  )
}
