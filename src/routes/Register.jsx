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
      onChange={onChange}
      >
        First name
      </LabelWithInput>
      <LabelWithInput
      type='text'
      id='lastName'
      name='lastName'
      onChange={onChange}
      >
        Last name
      </LabelWithInput>
      <LabelWithInput
      type='email'
      id='email'
      name='email'
      placeholder='e.g. someone@example.com'
      onChange={onChange}
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
      <Button onClick={onClick}>Create account</Button>
    </FormComponent>
    </>
  )
}

export default Register