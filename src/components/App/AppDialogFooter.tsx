import { FC, ReactElement } from 'react'

type Props = {
  message?: string | null
  leftButtons?: ReactElement
  rightButtons?: ReactElement
}

export const AppDialogFooter: FC<Props> = ({
  message,
  leftButtons,
  rightButtons,
}) => {
  return (
    <div className="grid grid-cols-[auto,1fr,auto] grid-rows-[auto,auto]">
      {message !== undefined && message !== null ? (
        <span className="col-span-full row-start-1 mb-4 font-bold text-rose-700 dark:text-rose-400">
          {message}
        </span>
      ) : null}

      {leftButtons !== undefined ? (
        <div className="col-start-1 row-start-2 flex items-center gap-x-4">
          {leftButtons}
        </div>
      ) : null}

      {rightButtons !== undefined ? (
        <div className="col-start-3 row-start-2 flex items-center gap-x-4">
          {rightButtons}
        </div>
      ) : null}
    </div>
  )
}
