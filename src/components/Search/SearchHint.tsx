import { FC } from 'react'
import { Kbd } from '../basics/Kbd'

interface Props {
  inputs?: string[]
}

export const SearchHint: FC<Props> = ({ children, inputs }) => {
  return (
    <div className="mt-4">
      {inputs !== undefined && inputs.length > 0 ? (
        <div>
          {inputs.map((input, index) => (
            <>
              {index > 0 ? ' + ' : null}
              <Kbd>{input}</Kbd>
            </>
          ))}
        </div>
      ) : null}

      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  )
}
