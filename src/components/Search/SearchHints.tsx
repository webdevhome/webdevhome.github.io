import { FC } from 'react'
import { useOpenLinksInNewTab } from '../App/useOpenLinksInNewTab'
import { SearchHint } from './SearchHint'

export const SearchHints: FC = () => {
  const openLinksInNewTab = useOpenLinksInNewTab()

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
