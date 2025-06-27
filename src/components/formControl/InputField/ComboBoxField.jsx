import React from 'react'
import { cn } from '@/lib/utils'

import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
]

const ComboBoxField = (props) => {
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
    classes = {},
    options = [],
    placeholder = "Select option",
    multiSelect = false,
    searchPlaceholder = "Search...",
    notFoundMesaage= "Not found",
    displayError = true,
    onChange,
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
      control={control}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", wrapperClass)}>
          {label && <FormLabel className={labelClass}>{label}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  disabled={isDisabled}
                  className={cn(
                    "w-[200px] justify-between font-normal h-auto",
                    `${!(field.value && (Array.isArray(field.value) ? field.value.length : field.value)) && "text-muted-foreground"} ${fullWidth && 'w-full'}`
                  )}
                >
                  <span className='whitespace-normal text-left'>
                    {field.value
                      ? Array.isArray(field.value) ? field.value.length
                      ? field.value.map((s) => options.filter(ele => ele.value==s)?.[0]?.label).join(', ')
                      : placeholder : options.find(
                          (language) => language.value === field.value
                        )?.label
                      : placeholder}
                  </span>
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder={searchPlaceholder}
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>{notFoundMesaage}</CommandEmpty>
                  <CommandGroup>
                    {options.map((option) => {
                      const values = field?.value ? field.value : [];
                      
                      const isSelected = multiSelect && values.findIndex(
                        (f) => f === option?.value
                      ) !== -1;
                      
                      return(
                        <CommandItem
                          value={option?.label}
                          key={option?.value}
                          onSelect={() => {
                            const value = multiSelect ? isSelected
                            ? values.filter((f) => f !== option?.value)
                            : [...values, option?.value] : option?.value
                            field.onChange(value);
                          }}
                        >
                          {option?.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              multiSelect ? isSelected ? "opacity-100"
                              : "opacity-0" :
                              option?.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {helperText && <FormDescription>{helperText}</FormDescription>}          
          {displayError && <FormMessage className={errorClass} />}
        </FormItem>
      )}
    />
  )
}

export default ComboBoxField