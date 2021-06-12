import React from 'react'
import Card from '../Card/Card'
import './AllCards.css'

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
      <h3 className='content'>Saved Genders</h3>
      <section className='genders-container'>
        {savedGenders}
      </section>
    </div>
  )
}

export default AllCards
