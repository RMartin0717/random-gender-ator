describe('About', () => {
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
      .get('.about-btn').click()
  })
  it('Should display page title, About', () => {
    cy.get('.about-page > h3').should('include.text', 'About')
  })
  it('Should display examples of ways to interact with the page', () => {
    cy.get('.ways-to-play').should('exist')
  })
})
