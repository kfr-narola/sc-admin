import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormLabel } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import InputField from '@/components/formControl/InputField'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { datePickerRangeSchema } from '@/components/formControl/InputField/DatePickerField'

const FormSchema = z.object({
  email: z.string().email(),
  gender: z.string(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirm_password: z.string().min(6, {
    message: "Confirm password must be at least 6 characters.",
  }),
  hobby: z.any(),
  // dob: z.object(),
  // dob: z.object().extend({
  //   start: z.date(),
  //   end: z.date()
  // }),
  dob: datePickerRangeSchema
})

const Register = () => {

  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = (data) => {
    console.log(data);
  }

  console.log(form.formState.errors);


  return (
    // <LoginForm />
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Let’s Get You Started!</CardTitle>
          <CardDescription>
            Sign up in just a few steps and unlock a world of features tailored just for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* <InputField
                type="radio"
                name="gender"
                label="Gender"
                options={[
                  {label: 'Male', value: 'male'},
                  {label: 'Female', value: 'female'}
                ]}
              />
              <InputField 
                name="hobby"
                label="Hobby"
                type="combobox"
                placeholder="Select hobby"
                searchPlaceholder="Search hobby"
                notFoundMesaage="No hobby found"
                multiSelect={true}
                onChange={(e) => console.log(e)}
                options={[
                  { label: "English", value: "en" },
                  { label: "French", value: "fr" },
                  { label: "German", value: "de" },
                  { label: "Spanish", value: "es" },
                  { label: "Portuguese", value: "pt" },
                  { label: "Russian", value: "ru" },
                  { label: "Japanese", value: "ja" },
                  { label: "Korean", value: "ko" },
                  { label: "Chinese", value: "zh" },
                ]}
              />
              <InputField
                type="date"
                name="dob"
                label="Birthdate"
                range={true}
                placeholder="Enter your birthdate"
              /> */}
              <InputField
                type="email"
                name="email"
                label="Email"
                placeholder="Enter email"
                onChange={(e) => console.log(e)}
              />
              <InputField
                type="password"
                name="password"
                label="Password"
                placeholder="Enter password"
                onChange={(e) => console.log(e)}
              />
              <InputField
                type="password"
                name="confirm_password"
                label="Confirm Password"
                placeholder="Enter password"
                onChange={(e) => console.log(e)}
              />
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Register