import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { type FC, type PropsWithChildren, type ReactElement } from 'react'

type Props = {
  title: string
  isOpen: boolean
  message?: string | null
  leftButtons?: ReactElement
  rightButtons?: ReactElement
  onClose: () => void
}

export const UiDialog: FC<PropsWithChildren<Props>> = ({
  title,
  isOpen,
  message,
  leftButtons,
  rightButtons,
  onClose,
  children,
}) => {
  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={onClose}
      tabIndex={0}
    >
      <div className="fixed inset-0 grid items-center justify-center bg-black/20">
        <DialogPanel className="grid max-h-[90vh] w-[90vw] max-w-full grid-rows-[auto_1fr_auto] rounded-lg bg-gray-100 shadow-lg md:w-[75vw] dark:bg-gray-800">
          <DialogTitle className="px-4 pt-4 font-bold">{title}</DialogTitle>

          <div className="overflow-y-auto p-4">{children}</div>

          <div className="px-4 pb-4">
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
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
