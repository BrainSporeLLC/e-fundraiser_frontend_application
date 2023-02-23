import React from 'react'
import FormComponent from '../components/Form'
import LabelWithInput from '../components/LabelWithInput'

const Register = ({onChange}) => {
  return (
    <>
    <FormComponent method="POST">
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