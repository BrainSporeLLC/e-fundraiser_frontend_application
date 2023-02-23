import React from 'react'
import FormComponent from '../components/Form'
import LabelWithInput from '../components/LabelWithInput'

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
      id='username'
      name='username'
      onChange={onchange}
      >
        Username
      </LabelWithInput>
    </FormComponent>
    </>
  )
}

export default Register