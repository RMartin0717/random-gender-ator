import React from 'react'
import './Card.css'

const Card = ({ gender, id, favGender, delGender }) => {
  return(
    <div className='gender-card'>
      <h3>{gender}</h3>
      <button className='save-button' onClick={(event) => favGender(gender)}>Save Gender</button>
      <button className='delete-button' onClick={(event) => delGender(id)}>Delete Gender</button>
    </div>
  )
}

export default Card
