import { useStore } from '@nanostores/react'
import { type FC } from 'react'
import { openLinksInNewTabStore } from '../links/openLinksInNewTab.ts'
import { SearchHint } from './SearchHint.tsx'

export const SearchHints: FC = () => {
  const openLinksInNewTab = useStore(openLinksInNewTabStore.$setting)

  return (
    <div className="mx-6 text-base">
      <SearchHint>Type ahead to filter links.</SearchHint>

      {openLinksInNewTab ? (
        <>
          <SearchHint inputs={['Return']}>
            Open link in new tab (foreground)
          </SearchHint>

          <SearchHint inputs={['Ctrl', 'Return']}>
            Open link in new tab (background)
          </SearchHint>
        </>
      ) : (
        <>
          <SearchHint inputs={['Return']}>Open link</SearchHint>

          <SearchHint inputs={['Ctrl', 'Return']}>
            Open link in a new tab (background)
          </SearchHint>

          <SearchHint inputs={['Ctrl', 'Shift', 'Return']}>
            Open link in a new tab (foreground)
          </SearchHint>
        </>
      )}
    </div>
  )
}
