import { MenuSection } from '@headlessui/react'
import { type FC, type PropsWithChildren } from 'react'

export const UiMenuSection: FC<PropsWithChildren> = ({ children }) => {
  return <MenuSection className="flex flex-col gap-y-1">{children}</MenuSection>
}
