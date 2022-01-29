import React, { FC } from 'react'
import { SearchHint } from './SearchHint'

export const SearchHints: FC = () => {
  return (
    <div className="mx-8 text-lg">
      <SearchHint>Type ahead to filter links.</SearchHint>

      <SearchHint inputs={['Return']}>Open link</SearchHint>

      <SearchHint inputs={['Ctrl', 'Return']}>
        Open link in a new tab (background)
      </SearchHint>

      <SearchHint inputs={['Ctrl', 'Shift', 'Return']}>
        Open link in a new tab (foreground)
      </SearchHint>
    </div>
  )
}
