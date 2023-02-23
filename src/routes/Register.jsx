import React from 'react'
import FormComponent from '../components/Form'
import LabelWithInput from '../components/LabelWithInput'

const Register = () => {
  return (
    <>
    <FormComponent method="POST">
      <LabelWithInput
      type='email'
      
      >
        Username
      </LabelWithInput>
    </FormComponent>
    </>
  )
}

export default Register