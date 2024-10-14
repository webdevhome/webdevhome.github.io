import { FC } from 'react'
import { useSearchMode } from '../App/useSearchMode'
import { MdiIcon } from '../Icon/MdiIcon'
import { mdiMagnify } from '@mdi/js'

export const AppSearchButton: FC = () => {
  const searchMode = useSearchMode()

  return (
    <div
      className="flex cursor-default gap-x-1 rounded bg-black/10 px-20 py-1 text-black/60 hover:bg-black/20 active:bg-black/25 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20 dark:active:bg-white/25"
      onClick={searchMode.handleSearchAction}
    >
      <MdiIcon path={mdiMagnify} />
      Search...
    </div>
  )
}
