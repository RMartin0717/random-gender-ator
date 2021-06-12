import React from 'react'
import './Card.css'

const Card = ({ gender, id, saveGender, delGender }) => {
  return(
    <div className='card-container'>
      {!gender &&
        <h4>No Gender Yet</h4>
      }
      {gender &&
        <div className='gender-card' id={gender.id}>
          <h4>{gender.gender}</h4>
          <button className='save-button' onClick={(event) => saveGender(gender.gender, gender.id)}>Save Gender</button>
          <button className='delete-button' onClick={(event) => delGender(gender.id)}>Delete Gender</button>
        </div>
      }
    </div>
  )
}

export default Card
