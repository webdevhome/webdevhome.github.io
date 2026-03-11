import { FC, Fragment, PropsWithChildren, useMemo } from 'react'
import { detectPlatform } from '../../utils/detectPlatform'
import { Kbd } from '../basics/Kbd'

type Props = {
  inputs?: string[]
}

export const SearchHint: FC<PropsWithChildren<Props>> = ({
  children,
  inputs,
}) => {
  const universalInputs = useMemo((): string[] => {
    return (
      inputs?.map((i) =>
        i === 'Ctrl' && detectPlatform() === 'mac' ? 'Cmd' : i,
      ) ?? []
    )
  }, [])

  return (
    <div className="mt-4 text-gray-600 dark:text-gray-300">
      {universalInputs.length > 0 ? (
        <div>
          {universalInputs.map((input, index) => (
            <Fragment key={index}>
              {index > 0 ? ' + ' : null}
              <Kbd>{input}</Kbd>
            </Fragment>
          ))}
        </div>
      ) : null}

      <div>{children}</div>
    </div>
  )
}
