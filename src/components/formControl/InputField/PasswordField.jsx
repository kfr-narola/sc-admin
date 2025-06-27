import React, { useState } from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { EyeClosedIcon, EyeIcon, EyeOffIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PasswordField = (props) => {
  const {
    id,
    name,
    label,
    control,
    defaultValue,
    type = 'text',
    handleOnChange,
    isController = true,
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
 
  const [showPassword, setShowPasseord] = useState(false);

  return (
    <FormField
      id={id}
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={wrapperClass}>
          {label && typeof label === 'string' ? <FormLabel className={labelClass}>{label}</FormLabel> : label}
          <div className={'relative'}>
            <FormControl>
              <Input 
                className={fieldClass}
                autoFocus={autoFocus}
                disabled={isDisabled}
                type={showPassword ? 'text' : 'password'}
                {...restProps}
                {...field} 
              />
            </FormControl>
            <Button className={"absolute top-0 right-0.5 opacity-50"} variant="link" onClick={() => setShowPasseord(!showPassword)}>
              {showPassword ? <EyeIcon /> : <EyeOffIcon /> }
            </Button>
          </div>
          {helperText && <FormDescription>{helperText}</FormDescription>}          
          {displayError && <FormMessage className={errorClass} />}
        </FormItem>
      )}
    />
  )
}

export default PasswordField