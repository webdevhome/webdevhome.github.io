import { type FC } from 'react'
import { useIconSizeData, type IconSize } from './useIconSizeData.ts'
import { useIconShadow } from './useIconShadow.ts'

type Props = {
  path: string
  size: IconSize
}

export const SimpleIcons: FC<Props> = ({ path, size }) => {
  const iconSizeData = useIconSizeData(size)
  const iconShadow = useIconShadow(size)

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconSizeData.className}
      style={{ filter: iconShadow }}
    >
      <path d={path}></path>
    </svg>
  )
}
