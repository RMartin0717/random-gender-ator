describe('Form', () => {
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
  it('Should have a controlled input field for a vibe whose value reflects the data selected in the form', () => {
    cy.get('form select[name="vibe"]').select('trash')
      .get('form select[name="vibe"]').should('have.value', 'trash')
  })
  it('Should have a controlled input field for entity whose value reflects the data selected in the form', () => {
    cy.get('form select[name="entity"]').select('animal')
      .get('form select[name="entity"]').should('have.value', 'animal')
  })
  it('Should have a button that displays a new gender when all select fields have selections made and button is clicked', () => {
    cy.get('form select[name="vibe"]').select('trash')
      .get('form select[name="entity"]').select('animal')
      .get('.new-gender-btn').click()
      .get('.new-gender').should('exist')
  })
  describe('Form Error Handling', () => {
    it('Should return an error message if the user does not fill out all input fields',() => {
      cy.get('form select[name="vibe"]').select('trash')
        .get('.new-gender-btn').click()
        .get('.error').should('have.text', 'Error: Please select both a vibe and an entity')
    })
    //test for error message if any category fetch calls failed (app line 44)
    //test for error message if word associations were not found for a specifc category (app line 67)
  })
})
