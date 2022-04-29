describe('The Program Page', () => {
  beforeEach(function () {
    cy.visit('/program')
  })
  it('Program List page loaded successfully', () => {
    cy.contains('Welcome to the Program List page!').should('be.visible')
  })
  it('Program Create page loaded successfully', () => {
    cy.contains('Add a New Program').click()
    cy.contains('Create new program').should('be.visible')
  })
  it('Add a new Program successfully', () => {
    cy.contains('Add a New Program').click()
    cy.get('input[name=name]').type('Lighthouse Labs')
    cy.get('input[name=duration_days]').type('180')
    cy.get('textarea[name=description]').type('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.')
    cy.get('input[type=file]').selectFile('LHLpic1.png')
    cy.contains('Submit').click()
    cy.contains('Welcome to Lighthouse Labs program!').should('be.visible')
  })
  it('View an existent Program successfully', () => {
    cy.contains('.card', 'Lighthouse Labs') 
      .children('.card-footer')
      .children('button.btn.btn-info')
      .click()
    cy.contains('Welcome to Lighthouse Labs program!').should('be.visible')
    cy.contains('Lighthouse Labs').should('be.visible')
    cy.contains('180').should('be.visible')
    cy.contains('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.').should('be.visible')
    cy.get('img').should('be.visible')
  })
  it('Delete an existent Program successfully', () => {
    cy.contains('.card', 'Lighthouse Labs') 
    .children('.card-footer')
    .children('button.btn.btn-danger')
    .click()
  })
})