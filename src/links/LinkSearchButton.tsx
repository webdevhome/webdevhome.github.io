import { SearchIcon } from 'lucide-react'
import { type FC, type MouseEvent } from 'react'
import { useIsAppMode } from '../app/appModeStore.ts'
import { Kbd } from '../ui/Kbd.tsx'
import { LinkAction } from './LinkAction.tsx'

type Props = {
  searchable: boolean
  focused: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export const LinkSearchButton: FC<Props> = ({
  searchable,
  focused,
  onClick,
}) => {
  const isAppMode = useIsAppMode()

  if (!searchable) {
    return null
  }

  if (isAppMode('customize')) {
    return null
  }

  return (
    <>
      {focused && (
        <div className="mr-2 self-center">
          <span className="flex items-center justify-center">
            <Kbd>Tab</Kbd>
          </span>
        </div>
      )}

      <LinkAction
        className="self-stretch dark:text-gray-50"
        hasHover
        onClick={onClick}
      >
        <SearchIcon className="opacity-40 group-hover:opacity-100" />
      </LinkAction>
    </>
  )
}
