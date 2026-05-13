import classNames from 'classnames'
import { CopyCheckIcon, CopyIcon, CopySlashIcon } from 'lucide-react'
import { type FC, type ReactElement } from 'react'
import { useIsAppMode } from '../app-mode/useIsAppMode.ts'

export type LinksVisible = 'all' | 'some' | 'none'

type Props = {
  linksVisible: LinksVisible
  onClick: () => void
}

export const CategorySelectAllButton: FC<Props> = ({
  linksVisible: state,
  onClick,
}) => {
  const isAppMode = useIsAppMode()

  const icon = ((): ReactElement => {
    switch (state) {
      case 'all':
        return <CopyCheckIcon />
      case 'some':
        return <CopySlashIcon />
      case 'none':
        return <CopyIcon />
      default:
        throw new TypeError(`Unknown state "${state satisfies never}"`)
    }
  })()

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
        'text-brand-600 hover:text-brand-800',
        'dark:text-brand-300 hover:dark:text-brand-100',
        'rounded',
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
