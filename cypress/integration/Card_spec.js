describe('Card', () => {
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
  it('Should display a message stating there is no gender yet on page load', () => {
    .get('.no-gender').should('have.text', 'No Gender Yet')
  })
  it('Should display a random new gender when the New Gender Please button is clicked on home page', () => {
    cy.get('form select[name="vibe"]').select('sparkle')
      .get('form select[name="entity"]').select('extraterrestrial')
      .get('.new-gender-btn').click()
      .get('.new-gender').should('have.text', 'twinkle spaceship')
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
      .get('.new-gender').should('have.text', 'twinkle spaceship')
  })
})
