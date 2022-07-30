describe('About', () => {
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
      .get('.about-btn').click()
  })
  it('Should display page title, About', () => {
    cy.get('.about-page > h2').should('include.text', 'About')
  })
  it('Should display examples of ways to interact with the page', () => {
    cy.get('.ways-to-play').should('exist')
  })
})
