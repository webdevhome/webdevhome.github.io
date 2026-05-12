import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import classNames from 'classnames'
import {
  CheckIcon,
  InfoIcon,
  OctagonAlertIcon,
  TriangleAlertIcon,
  XIcon,
} from 'lucide-react'
import { type FC, type PropsWithChildren, type ReactElement } from 'react'

export type UiDialogMessageType = 'default' | 'success' | 'warning' | 'error'

export type UiDialogMessage = {
  text: string | null
  type: UiDialogMessageType
}

type Props = {
  title: string
  isOpen: boolean
  message?: UiDialogMessage
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
          <div className="grid grid-cols-[1fr_auto] items-center">
            <DialogTitle className="px-4 pt-4 font-bold">{title}</DialogTitle>

            <button className="px-4 pt-4" onClick={onClose}>
              <XIcon />
            </button>
          </div>

          <div className="overflow-y-auto p-4">{children}</div>

          <div className="px-4 pb-4">
            <div className="grid grid-cols-[auto_1fr_auto] grid-rows-[auto_auto]">
              {message !== undefined && message.text !== null ? (
                <span
                  className={classNames(
                    'flex items-center gap-2',
                    'col-span-full row-start-1 mb-4 font-semibold',
                    {
                      'text-neutral-700 dark:text-neutral-200':
                        message.type === 'default',
                      'text-emerald-700 dark:text-emerald-400':
                        message.type === 'success',
                      'text-amber-700 dark:text-amber-400':
                        message.type === 'warning',
                      'text-rose-700 dark:text-rose-400':
                        message.type === 'error',
                    },
                  )}
                >
                  <span>
                    {message.type === 'default' && <InfoIcon />}
                    {message.type === 'success' && <CheckIcon />}
                    {message.type === 'warning' && <OctagonAlertIcon />}
                    {message.type === 'error' && <TriangleAlertIcon />}
                  </span>

                  <span>{message.text}</span>
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
