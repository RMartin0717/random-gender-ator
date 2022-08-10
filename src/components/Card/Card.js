import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ gender, saveGender, delGender }) => {
  return(
    <div className='card-container'>
      {!gender &&
        <h3 className='no-gender'>No Gender Yet</h3>
      }
      {gender &&
        <div className='card-outline'>
          <div className='gender-card' id={gender.id}>
            <h3 className='new-gender content'>{gender.gender}</h3>
            <div className='content'>
              <button className='card-btn' onClick={(event) => saveGender(gender.gender, gender.id)}>Save Gender</button>
              <button className='card-btn' onClick={(event) => delGender(gender.id)}>Delete Gender</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

Card.propTypes = {
  gender: PropTypes.shape({
    gender: PropTypes.string,
    id: PropTypes.number
  }),
  saveGender: PropTypes.func.isRequired,
  delGender: PropTypes.func.isRequired
}

Card.defaultProps = {
  gender: null
}

export default Card
