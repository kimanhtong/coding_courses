describe('The Program List Page', () => {
  it('successfully loads', () => {
    cy.visit('/program') // change URL to match your dev URL
  })
  it('successfully loads create page', () => {
    cy.visit('/program')
    cy.contains('Add a New Program').click()
  })
})