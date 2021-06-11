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
    <>
      <h3>Saved Genders</h3>
      <section className='genders-container'>
        {savedGenders}
      </section>
    </>
  )
}

export default AllCards
