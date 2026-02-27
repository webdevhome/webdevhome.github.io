import { Textarea } from '@headlessui/react'
import classNames from 'classnames'
import { ChangeEventHandler, forwardRef, KeyboardEvent } from 'react'

type Props = {
  value?: string
  disabled?: boolean
  readonly?: boolean
  className?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
}

function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
  event.stopPropagation()
}

export const AppTextarea = forwardRef<HTMLTextAreaElement, Props>(
  function AppTextarea(
    { value = '', disabled = false, readonly = false, className = '', onChange },
    ref,
  ) {
    return (
      <Textarea
        value={value}
        className={classNames(
          'h-96 max-h-full w-full resize-none rounded border border-gray-300 p-4',
          'dark:border-gray-500 dark:bg-gray-700',
          className,
        )}
        disabled={disabled}
        readOnly={readonly}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        ref={ref}
      ></Textarea>
    )
  },
)
