describe('Card', () => {
  beforeEach(() => {
    cy.fixture('animal').then((animal) => {
      cy.intercept('https://the-random-gender-ator-api.herokuapp.com/api/v1/animals', {
        body: animal
      }).as('animal')
    })
      .fixture('extraterrestrial').then((extraterrestrial) => {
      cy.intercept('https://the-random-gender-ator-api.herokuapp.com/api/v1/extraterrestrials', {
        body: extraterrestrial
      }).as('extraterrestrial')
    })
      .fixture('trash').then((trash) => {
      cy.intercept('https://the-random-gender-ator-api.herokuapp.com/api/v1/trashes', {
        body: trash
      }).as('trash')
    })
      .fixture('sparkle').then((sparkle) => {
      cy.intercept('https://the-random-gender-ator-api.herokuapp.com/api/v1/sparkles', {
        body: sparkle
      }).as('sparkle')
    })
      .visit('http://localhost:3000/')
  })

  it('Should display a message stating there is no gender yet on page load', () => {
    cy.get('.no-gender').should('have.text', 'No Gender Yet')
  })
  it('Should display a random new gender when the New Gender Please button is clicked on home page', () => {
    cy.get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.new-gender').should('have.text', 'glitter spaceship')
  })
  it('Should display save and delete buttons when the New Gender Please button is clicked on home page', () => {
    cy.get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.save-button').should('exist')
      .get('.delete-button').should('exist')
  })
  it('Should save the current card when the save button is clicked. Should be visible on Saved Genders page', () => {
    cy.get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.save-button').click()
      .get('.saved-btn').click()
      .get('.new-gender').should('have.text', 'glitter spaceship')
  })
  it('Should delete a card when the delete button is clicked. Should disappear from Saved Genders page', () => {
    cy.get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.save-button').click()
      .get('.saved-btn').click()
      .get('.new-gender').should('have.text', 'glitter spaceship')
      .get('.delete-button').click()
      .get('.gender-card').should('not.exist')
  })
})
