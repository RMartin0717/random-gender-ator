describe('App Error Handling', () => {
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
        body: sparkle,
        statusCode:404,
      }).as('sparkle')
    })
  })

  it('Should display an error message if any of the selected category arrays do not contain any word associations', () => {
      cy.visit('http://localhost:3000/')
      .get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.error').should('have.text', 'Error: Some data didn\'t make it. Try again later.')
  })
  it('Should display a 404 error message if the user navigates to a path that doesn\'t exist', () => {
      cy.visit('http://localhost:3000/lkajsdfl')
        .get('.error').should('have.text', 'Error: Page not found. Click \'Home\' to return to the main page.')
  })
})
