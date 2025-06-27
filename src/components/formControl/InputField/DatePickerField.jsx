import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from '@/lib/utils'
import { z } from 'zod'
// import { DateRange } from "react-day-picker"

const DatePickerField = (props) => {
  const {
    id,
    name,
    label,
    control,
    defaultValue,
    handleOnChange,
    autoFocus = false,
    isDisabled = false,
    helperText = false,
    range = false,
    classes = {},
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
      name={name}
      render={({ field }) => (
        <FormItem className={wrapperClass}>
          {label && typeof label === 'string' ? <FormLabel className={labelClass}>{label}</FormLabel> : label}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    `min-w-[240px] pl-3 text-left font-normal ${fullWidth && 'w-full'}`,
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {range ?
                    field?.value?.from ? (
                      field?.value.to ? (
                        <>
                          {format(field?.value.from, "LLL dd, y")} -{" "}
                          {format(field?.value.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(field?.value.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )
                  :field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode={range ? 'range' : 'single'}
                selected={field.value}
                onSelect={(value) => {
                  console.log(value);
                  console.log({
                    from: new Date(),
                    to: new Date()
                  });
                  
                  field.onChange(value);                
                }}
                initialFocus
              /> 
            </PopoverContent>
          </Popover>
          {helperText && <FormDescription>{helperText}</FormDescription>}          
          {displayError && <FormMessage className={errorClass} />}
        </FormItem>
      )}  
    />
  )
}

export const datePickerRangeSchema = z.object(
    {
      from: z.date().optional(),
      to: z.date().optional(),
    },
    {
      required_error: "Please select a date range",
    }
  )
  .refine((data) => data?.from && data?.to, {
    message: "Please select from and to date",
  })
  .refine((data) => data?.from?.getTime() < data?.to?.getTime(), {
    message: "From date must be before to date",
  })

export default DatePickerField