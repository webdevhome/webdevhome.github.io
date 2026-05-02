import type { ChangeEvent } from 'react'
import {
  $searchTarget,
  $searchTerm,
  $onSiteSearchTerm,
  $keyboardIndex,
} from './useSearch.ts'

export function useHandleSearchInputChange(): (
  event: ChangeEvent<HTMLInputElement>,
) => void {
  return (event: ChangeEvent<HTMLInputElement>) => {
    if ($searchTarget.value === null) {
      $searchTerm.set(event.target.value)
    } else {
      $onSiteSearchTerm.set(event.target.value)
    }

    $keyboardIndex.set(0)
  }
}
