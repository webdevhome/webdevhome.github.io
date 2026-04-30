import classNames from 'classnames'
import { SearchIcon } from 'lucide-react'
import { type FC } from 'react'
import { appMode, setAppMode } from '../app/appModeStore.ts'

export const AppSearchButton: FC = () => {
  return (
    <button
      className={classNames(
        'max-md:hidden',
        'flex gap-x-1',
        'px-20 py-1.5',
        'rounded-full',
        'bg-black/10 hover:bg-black/20 active:bg-black/25',
        'dark:bg-white/10 dark:hover:bg-white/20 dark:active:bg-white/25',
        'text-black/60 dark:text-white/60',
        'cursor-default',
        'select-none',
      )}
      onClick={() => setAppMode(appMode.search)}
    >
      <SearchIcon />
      Search...
    </button>
  )
}
