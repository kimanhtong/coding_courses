describe('The Program Page', () => {
  it('Program List page loaded', () => {
    cy.visit('/program') // change URL to match your dev URL
    cy.contains('Welcome to the Program List page!').should('be.visible')
  })
  it('Program Create page loaded', () => {
    cy.visit('/program')
    cy.contains('Add a New Program').click()
    cy.contains('Create new program').should('be.visible')
  })
  it('Add a new Program successfully', () => {
    cy.visit('/program')
    cy.contains('Add a New Program').click()
    cy.get('input[name=name]').type('Lighthouse Labs')
    cy.get('input[name=duration_days]').type('180')
    cy.get('textarea[name=description]').type('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.')
    cy.get('input[type=file]').selectFile('LHLpic1.png')
    cy.contains('Submit').click()
    cy.contains('Welcome to Lighthouse Labs program!').should('be.visible')
  })
})