import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const TextField = (props) => {
  const {
    id,
    name,
    label,
    control,
    defaultValue,
    type = 'text',
    handleOnChange,
    autoFocus = false,
    isDisabled = false,
    helperText = false,
    classes = {},
    displayError = true,
    ...restProps
  } = props

  const {
    wrapper: wrapperClass = '',
    label: labelClass = '',
    field: fieldClass = '',
    error: errorClass = '',
  } = classes
  
  console.log("COntrol", control);
  
  
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={wrapperClass}>
          {label && typeof label === 'string' ? <FormLabel className={labelClass}>{label}</FormLabel> : label}
          <FormControl
            className={isDisabled && 'cursor-not-allowed'}
            >
            <Input
              autoFocus={autoFocus}
              className={fieldClass}
              disabled={isDisabled}
              {...restProps}
              {...field}
            />
          </FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}          
          {displayError && <FormMessage className={errorClass} />}
        </FormItem>
      )}
    />
  )
}

export default TextField