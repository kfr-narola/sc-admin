import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from '@/lib/utils'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'


const SelectField = (props) => {
  const {
    id,
    name,
    label,
    control,
    defaultValue,
    handleOnChange,
    isController = true,
    autoFocus = false,
    isDisabled = false,
    helperText = false,
    classes = {},
    options = [],
    placeholder = "Select option",
    displayError = true,
    fullWidth=true,
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
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("w-full", wrapperClass)}>
          {label && <FormLabel className={labelClass}>{label}</FormLabel>}
          <Select disabled={isDisabled} className={cn("w-full", fieldClass)} onValueChange={field.onChange} defaultValue={field.value} {...restProps}>
            <FormControl>
              <SelectTrigger className={fullWidth && 'w-full'}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, index) => {
                return <SelectItem value={option?.value} key={`select_${name}_${index}`}>{option?.label}</SelectItem>
              })}
            </SelectContent>
          </Select>
          {helperText && <FormDescription>{helperText}</FormDescription>}          
          {displayError && <FormMessage className={errorClass} />}
        </FormItem>
      )}
    />


  )
}

export default SelectField