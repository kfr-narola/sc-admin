import React from 'react'
import { cn } from '@/lib/utils'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'


const RadioField = (props) => {
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
    options = [],
    displayError = true,
    ...restProps
  } = props

  const {
    wrapper: wrapperClass = '',
    label: labelClass = '',
    field: fieldClass = '',
    error: errorClass = '',
  } = classes

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && typeof label === 'string' ? <FormLabel className={labelClass}>{label}</FormLabel> : label}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn("flex flex-col space-y-0.5 gap-2", wrapperClass)}
            >
              {options.map((option, index) => {
                return(
                  <FormItem className="flex items-center space-x-3 space-y-0" key={`${name}_${index}_${option?.label}`}>
                    <FormControl>
                      <RadioGroupItem className={fieldClass} value={option?.value} />
                    </FormControl>
                    <FormLabel className="font-normal">{option?.label}</FormLabel>
                  </FormItem>
                )
              })}
            </RadioGroup>
          </FormControl>
          {helperText && <FormDescription>{helperText}</FormDescription>}
          {displayError && <FormMessage className={errorClass} />}
        </FormItem>
      )}
    />
  )
}

export default RadioField