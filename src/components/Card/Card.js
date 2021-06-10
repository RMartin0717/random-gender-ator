import React from 'react'
import './Card.css'

const Card = ({ gender, id, saveGender, delGender }) => {
  return(
    <>
      {!gender &&
        <h2>No Gender Yet</h2>
      }
      {gender &&
        <div className='gender-card' id={id}>
          <h3>{gender}</h3>
          <button className='save-button' onClick={(event) => saveGender(gender, id)}>Save Gender</button>
          <button className='delete-button' onClick={(event) => delGender(id)}>Delete Gender</button>
        </div>
      }
    </>
  )
}

export default Card
