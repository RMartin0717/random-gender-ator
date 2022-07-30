describe('AllCards', () => {
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
      .get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.save-button').click()
      .get('.saved-btn').click()
  })
  it('Should display page title, Saved Genders', () => {
    cy.get('.saved-genders > h2').should('have.text', 'Saved Genders')
  })
  it('Should display saved gender cards', () => {
    cy.get('.genders-container').should('not.be.empty')
  })
})
