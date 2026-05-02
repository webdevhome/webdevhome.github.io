import classNames from 'classnames'
import { CopyCheckIcon, CopyIcon } from 'lucide-react'
import { type FC } from 'react'
import { useIsAppMode } from '../app/appModeStore.ts'

type Props = {
  allUrlsAreHidden: boolean
  onClick: () => void
}

export const LinkGroupSelectAllButton: FC<Props> = ({
  allUrlsAreHidden,
  onClick,
}) => {
  const isAppMode = useIsAppMode()

  if (!isAppMode('customize')) {
    return null
  }

  return (
    <button
      className={classNames(
        'grid items-center justify-center',
        'px-2',
        'hover:bg-black/10 active:bg-black/15',
        'dark:hover:bg-white/10 dark:active:bg-white/15',
        {
          'text-brand-600 hover:text-brand-800': !allUrlsAreHidden,
          'dark:text-brand-300 hover:dark:text-brand-100': !allUrlsAreHidden,
          'text-brand-600/50 hover:text-brand-700/75': allUrlsAreHidden,
          'dark:text-brand-300/50 dark:hover:text-brand-200/75':
            allUrlsAreHidden,
        },
        'rounded',
      )}
      onClick={onClick}
    >
      {allUrlsAreHidden ? <CopyIcon /> : <CopyCheckIcon />}
    </button>
  )
}
