import React from 'react'
import TextField from './TextField'
import PasswordField from './PasswordField';
import SelectField from './SelectField';
import ComboBoxField from './ComboBoxField';
import RadioField from './RadioField';
import DatePickerField from './DatePickerField';

const InputField = (props) => {
  const { type } = props;
  switch (type) {
    case 'text':
    case 'email':
      return <TextField {...props} />

    case 'password':
      return <PasswordField {...props} />

    case 'select':
      return <SelectField {...props} />

    case 'combobox':
      return <ComboBoxField {...props} />

    case 'radio':
      return <RadioField {...props} />

    case 'date':
      return <DatePickerField {...props} />
    // case 'password':
    //   return <InputPassword {...props}/>
  
    default:
      return <div>default</div>
  }
}

export default InputField