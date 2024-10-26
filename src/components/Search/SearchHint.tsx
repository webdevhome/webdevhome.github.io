import { FC, Fragment, PropsWithChildren } from 'react'
import { Kbd } from '../basics/Kbd'

interface Props {
  inputs?: string[]
}

export const SearchHint: FC<PropsWithChildren<Props>> = ({
  children,
  inputs,
}) => {
  return (
    <div className="mt-4 text-gray-600 dark:text-gray-300">
      {inputs !== undefined && inputs.length > 0 ? (
        <div>
          {inputs.map((input, index) => (
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
