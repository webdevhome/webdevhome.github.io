import { FC, PropsWithChildren } from 'react'

export const AppMenuFooter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-1 border-t border-gray-300 bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:border-gray-400 dark:bg-gray-500 dark:text-gray-200 [&>p]:my-0.5">
      {children}
    </div>
  )
}
