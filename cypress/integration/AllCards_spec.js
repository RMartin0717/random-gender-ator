describe('AllCards', () => {
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
