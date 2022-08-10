import React from 'react'
import Card from '../Card/Card'
import './AllCards.css'
import PropTypes from 'prop-types'

const AllCards = ({ genders, saveGender, delGender }) => {
  const savedGenders = genders.map(gender => {
    return (
      <Card
        gender={gender}
        id={gender}
        key={gender.id}
        saveGender={saveGender}
        delGender={delGender}
      />
    )
  })
  return (
    <div className='saved-genders'>
      <h2 className='content'>Saved Genders</h2>
      {!savedGenders.length &&
        <h3>No Genders Saved Yet!</h3>
      }
      <section className='genders-container'>
        {savedGenders}
      </section>
    </div>
  )
}

AllCards.propTypes = {
  genders: PropTypes.arrayOf(PropTypes.shape({
    gender: PropTypes.string,
    id: PropTypes.number
  })),
  saveGender: PropTypes.func.isRequired,
  delGender: PropTypes.func.isRequired
}

export default AllCards
