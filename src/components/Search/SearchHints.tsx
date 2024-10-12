import { FC, PropsWithChildren } from 'react'

export const SearchHints: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-6 text-lg">{children}</div>
}
