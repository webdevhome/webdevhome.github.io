import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FC, PropsWithChildren, ReactElement } from 'react'

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
        <DialogPanel className="shadow-lg grid max-h-[90vh] w-[90vw] max-w-full grid-rows-[auto,1fr,auto] rounded-lg bg-gray-100 dark:bg-gray-800 md:w-[75vw]">
          <DialogTitle className="px-4 pt-4 font-bold">{title}</DialogTitle>
          <div className="overflow-y-auto p-4">{children}</div>
          <div className="px-4 pb-4">{footer}</div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
