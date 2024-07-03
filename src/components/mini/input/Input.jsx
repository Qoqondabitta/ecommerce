import React from 'react'
import "./input.css"

const InputGroup = () => {
  return (
      <div className='input-group'>
          <input placeholder='Search' />
          <label className='inputLabel'>Search</label>
    </div>
  )
}

export default InputGroup;