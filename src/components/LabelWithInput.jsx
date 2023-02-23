import React from 'react'

const LabelWithInput = ({type='text', id, name, onChange, children}) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default LabelWithInput