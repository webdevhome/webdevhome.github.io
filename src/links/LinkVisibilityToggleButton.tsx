import classNames from 'classnames'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { type FC } from 'react'
import { useIsAppMode } from '../app/appMode.ts'
import { LinkAction } from './LinkAction.tsx'

type Props = {
  isHidden: boolean
}

export const LinkVisibilityToggleButton: FC<Props> = ({ isHidden }) => {
  const isAppMode = useIsAppMode()

  return isAppMode('customize') ? (
    <LinkAction
      className={classNames({
        'text-brand-600 group-hover:text-brand-800': !isHidden,
        'dark:text-brand-300 group-hover:dark:text-brand-100': !isHidden,
        'text-brand-600/50 group-hover:text-brand-700/75': isHidden,
        'dark:text-brand-300/50': isHidden,
        'dark:group-hover:text-brand-200/75': isHidden,
      })}
    >
      {isHidden ? <EyeOffIcon /> : <EyeIcon />}
    </LinkAction>
  ) : null
}
