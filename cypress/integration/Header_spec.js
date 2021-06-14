describe('Header', () => {
  beforeEach(() => {
    cy.fixture('animal').then((animal) => {
      cy.intercept('https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=animal', {
        body: animal,
        headers: {
      		'x-rapidapi-key': '2f02989ae5msh427de8f8ba15f4ep120743jsn069d9b1838e3',
      		'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
      	}}).as('animal')
    })
      .fixture('extraterrestrial').then((extraterrestrial) => {
      cy.intercept('https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=extraterrestrial', {
        body: extraterrestrial,
        headers: {
      		'x-rapidapi-key': '2f02989ae5msh427de8f8ba15f4ep120743jsn069d9b1838e3',
      		'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
      	}}).as('extraterrestrial')
    })
      .fixture('trash').then((trash) => {
      cy.intercept('https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=trash', {
        body: trash,
        headers: {
      		'x-rapidapi-key': '2f02989ae5msh427de8f8ba15f4ep120743jsn069d9b1838e3',
      		'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
      	}}).as('trash')
    })
      .fixture('sparkle').then((sparkle) => {
      cy.intercept('https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=sparkle', {
        body: sparkle,
        headers: {
      		'x-rapidapi-key': '2f02989ae5msh427de8f8ba15f4ep120743jsn069d9b1838e3',
      		'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
      	}}).as('sparkle')
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
