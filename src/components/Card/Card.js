import React from 'react'
import './Card.css'

const Card = ({ currentGender, id, saveGender, delGender }) => {
  return(
    <>
      {!currentGender &&
        <h2>No Gender Yet</h2>
      }
      {currentGender &&
        <div className='gender-card' id={currentGender.id}>
          <h3>{currentGender.gender}</h3>
          <button className='save-button' onClick={(event) => saveGender(currentGender.gender, currentGender.id)}>Save Gender</button>
          <button className='delete-button' onClick={(event) => delGender(currentGender.id)}>Delete Gender</button>
        </div>
      }
    </>
  )
}

export default Card
