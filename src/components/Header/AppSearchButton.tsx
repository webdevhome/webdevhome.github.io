import { FC } from 'react'
import { useSearchMode } from '../App/useSearchMode'
import { MdiIcon } from '../Icon/MdiIcon'
import { mdiMagnify } from '@mdi/js'
import classNames from 'classnames'

export const AppSearchButton: FC = () => {
  const searchMode = useSearchMode()

  return (
    <div
      className={classNames(
        'flex gap-x-1',
        'mb-2 px-20 py-1 md:mt-2',
        'rounded-full',
        'bg-black/10 hover:bg-black/20 active:bg-black/25',
        'dark:bg-white/10 dark:hover:bg-white/20 dark:active:bg-white/25',
        'text-black/60 dark:text-white/60',
        'cursor-default',
      )}
      onClick={searchMode.handleSearchAction}
    >
      <MdiIcon path={mdiMagnify} />
      Search...
    </div>
  )
}
