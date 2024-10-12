import { FC } from 'react'
import { useSearchMode } from '../App/useSearchMode'
import { MdiIcon } from '../Icon/MdiIcon'
import { mdiMagnify } from '@mdi/js'

export const AppSearchButton: FC = () => {
  const searchMode = useSearchMode()

  return (
    <div
      className="flex cursor-default gap-x-1 rounded bg-gray-200 px-20 py-1 text-gray-600 hover:bg-gray-300 active:bg-gray-400 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500 dark:active:bg-gray-400"
      onClick={searchMode.handleSearchAction}
    >
      <MdiIcon path={mdiMagnify} />
      Search...
    </div>
  )
}
