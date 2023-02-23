import React from 'react'
import FormComponent from '../components/Form'
import LabelWithInput from '../components/LabelWithInput'

const Login = ({onChange}) => {
  return (
    <>
      <FormComponent>
        <LabelWithInput
        type='email'
        id='username'
        name='username'
        onChange={onChange}
        >Username</LabelWithInput>

      </FormComponent>
    </>
  )
}

export default Login