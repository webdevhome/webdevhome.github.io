import classNames from 'classnames'
import { type FC } from 'react'

type Props = {
  description: string | undefined
  showDescription: boolean
}

export const LinkDescription: FC<Props> = ({
  description,
  showDescription,
}) => {
  if (description === undefined) {
    return null
  }

  if (!showDescription) {
    return null
  }

  return (
    <div
      className={classNames(
        'col-start-2',
        'py-1',
        'text-sm leading-4',
        'text-gray-500 dark:text-gray-400',
      )}
    >
      {description}
    </div>
  )
}
