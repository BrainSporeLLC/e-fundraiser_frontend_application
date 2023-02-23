import React from 'react'
import FormComponent from '../components/Form'
import LabelWithInput from '../components/LabelWithInput'
import Button from '../components/Button'

const Register = ({onChange}) => {
  return (
    <>
    <FormComponent method="POST">
      <LabelWithInput
      type='text'
      id='firstName'
      name='firstName'
      onChange={onchange}
      >
        First name
      </LabelWithInput>
      <LabelWithInput
      type='text'
      id='lastName'
      name='lastName'
      onChange={onchange}
      >
        Last name
      </LabelWithInput>
      <LabelWithInput
      type='email'
      id='email'
      name='email'
      placeholder='e.g. someone@example.com'
      onChange={onchange}
      >
        Email
      </LabelWithInput>
      <LabelWithInput
      type='password'
      id='password'
      name='password'
      onChange={onchange}
      >
        Password
      </LabelWithInput>

      <LabelWithInput
      type='password'
      id='confirmPassword'
      name='confirmPassword' 
      onChange={onchange}
      >
        Confrim password
      </LabelWithInput>
      <Button>Create account</Button>
    </FormComponent>
    </>
  )
}

export default Register