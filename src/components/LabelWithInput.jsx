import React from 'react'

const LabelWithInput = ({type='text', id, name, onChange, children}) => {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{children}</label>
      <input type={type} id={id} name={name} onChange={onChange} aria-label={children}/>
      
    </div>
  )
}

export default LabelWithInput