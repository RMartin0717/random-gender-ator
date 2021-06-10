import React from 'react'
import './Card.css'

const Card = ({ gender, id, favGender}) => {
  return(
    <div className='gender-card'>
      <h3>{gender}</h3>
      <button className='save-button' onClick={(event) => favGender(gender, id)}>Save Gender</button>
    </div>
  )
}

export default Card
