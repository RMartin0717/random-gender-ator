import React from 'react'
import './Card.css'

const Card = ({ gender, id, saveGender, delGender }) => {
  return(
    <>
      {!gender &&
        <h2>No Gender Yet</h2>
      }
      {gender &&
        <div className='gender-card' id={gender.id}>
          <h3>{gender.gender}</h3>
          <button className='save-button' onClick={(event) => saveGender(gender.gender, gender.id)}>Save Gender</button>
          <button className='delete-button' onClick={(event) => delGender(gender.id)}>Delete Gender</button>
        </div>
      }
    </>
  )
}

export default Card
