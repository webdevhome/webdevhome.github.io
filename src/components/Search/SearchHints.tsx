import React, { memo } from 'react'

export const SearchHints = memo(function SearchHints() {
  return (
    <>
      <div className="search__results-hint">Type ahead to filter links.</div>
      <div className="search__results-hint">
        <kbd>Return</kbd>
        <div className="search__results-hint-description">Open link</div>
      </div>
      <div className="search__results-hint">
        <kbd>Ctrl</kbd> + <kbd>Return</kbd>
        <div className="search__results-hint-description">
          Open link in a new tab (background)
        </div>
      </div>
      <div className="search__results-hint">
        <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Return</kbd>
        <div className="search__results-hint-description">
          Open link in a new tab (foreground)
        </div>
      </div>
    </>
  )
})
