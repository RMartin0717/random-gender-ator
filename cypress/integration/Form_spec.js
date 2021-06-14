describe('Form', () => {
  beforeEach(() => {
    // cy.fixture('animal').then((animal) => {
    //   cy.intercept('https://twinword-word-associations-v1.p.rapidapi.com/associations/?entry=animal', { body: animal }).as('animal')
    // })
    //intercept for all 4 fetch calls
    //include header info in intercept
      cy.visit('http://localhost:3000/')
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
  })
})
