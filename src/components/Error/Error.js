import React from 'react'
import './Error.css'

const Error = ({ error }) => {
  return (
    <div className='error'>
      <h4>Error: {error}</h4>
    </div>
  )
}

export default Error
