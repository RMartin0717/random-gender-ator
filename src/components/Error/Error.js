import React from 'react'
import './Error.css'
import PropTypes from 'prop-types'

const Error = ({ error }) => {
  return (
    <div className='error'>
      <h4>Error: {error}</h4>
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.string
}

export default Error
