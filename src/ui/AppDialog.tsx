import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { type FC, type PropsWithChildren, type ReactElement } from 'react'

type Props = {
  title: string
  footer?: ReactElement
  isOpen: boolean
  onClose: () => void
}

export const AppDialog: FC<PropsWithChildren<Props>> = ({
  title,
  footer,
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Dialog className="relative z-50" open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 grid items-center justify-center bg-black/20">
        <DialogPanel className="grid max-h-[90vh] w-[90vw] max-w-full grid-rows-[auto_1fr_auto] rounded-lg bg-gray-100 shadow-lg md:w-[75vw] dark:bg-gray-800">
          <DialogTitle className="px-4 pt-4 font-bold">{title}</DialogTitle>
          <div className="overflow-y-auto p-4">{children}</div>
          <div className="px-4 pb-4">{footer}</div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
