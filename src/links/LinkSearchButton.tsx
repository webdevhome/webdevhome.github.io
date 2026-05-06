import { SearchIcon } from 'lucide-react'
import { type FC, type MouseEventHandler } from 'react'
import { useIsAppMode } from '../app/appMode.ts'
import { Kbd } from '../ui/Kbd.tsx'
import { LinkAction } from './LinkAction.tsx'

type Props = {
  focused: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const LinkSearchButton: FC<Props> = ({ focused, onClick }) => {
  const isAppMode = useIsAppMode()

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
