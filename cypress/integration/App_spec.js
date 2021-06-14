describe('App Error Handling', () => {
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
        statusCode:404,
        body: sparkle,
        headers: {
          'x-rapidapi-key': '2f02989ae5msh427de8f8ba15f4ep120743jsn069d9b1838e3',
          'x-rapidapi-host': 'twinword-word-associations-v1.p.rapidapi.com'
        }}).as('sparkle')
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
