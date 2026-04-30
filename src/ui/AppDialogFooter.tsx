import { type FC, type ReactElement } from 'react'

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
    <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto]">
      {message !== undefined && message !== null ? (
        <span className="col-span-full row-start-1 mb-4 font-bold text-rose-700 dark:text-rose-400">
          {message}
        </span>
      ) : null}

      <div className="col-start-1 row-start-2 flex items-center gap-x-4">
        {leftButtons}
      </div>

      <div className="col-start-3 row-start-2 flex items-center gap-x-4">
        {rightButtons}
      </div>
    </div>
  )
}
