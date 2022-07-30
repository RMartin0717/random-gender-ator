describe('Header', () => {
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
  it('Should display the page heading', () => {
    cy.get('.page-heading').should('have.text', 'The Random Gender-ator')
  })
  it('Should display buttons for the home page, the about page, and the saved genders page', () => {
    cy.get('.home-btn').should('exist')
      .get('.about-btn').should('exist')
      .get('.saved-btn').should('exist')
  })
  it('Should go to the home page when the home button is clicked', () => {
    cy.get('.home-btn').click()
      .url().should('include', '/')
  })
  it('Should go to the about page whent the about button is clicked', () => {
    cy.get('.about-btn').click()
      .url().should('include', '/about')
  })
  it('Should go to the saved genders page when the saved genders button is clicked', () => {
    cy.get('.saved-btn').click()
      .url().should('include', '/savedgenders')
  })
})
