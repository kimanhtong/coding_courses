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
  it('Add and Delete a new Program successfully', () => {
    cy.contains('Add a New Program').click()
    cy.get('input[name=name]').type('Lighthouse Labs')
    cy.get('input[name=duration_days]').type('180')
    cy.get('textarea[name=description]').type('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.')
    cy.get('input[type=file]').selectFile('LHLpic1.png')
    cy.contains('Submit').click()
    cy.contains('Welcome to Lighthouse Labs program!').should('be.visible')
    cy.contains('View All Programs').click()
    cy.contains('.card', 'Lighthouse Labs').should('be.visible')
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
  it('Edit an existent program', () => {
    cy.contains('.card', 'Lighthouse Labs')
    .children('.card-footer')
    .children('button.btn.btn-secondary')
    .click()
    cy.get('input[name=name]').clear().type('Web Flex Bootcamp')
    cy.get('input[name=duration_days]').clear().type('270')
    cy.get('textarea[name=description]').clear().type('Every test you write will include selectors for elements. To save yourself a lot of headaches, you should write selectors that are resilient to changes by: \nDon\'t target elements based on CSS attributes such as: id, class, tag \nDon\'t target elements that may change their textContent \nAdd data-* attributes to make it easier to target elements')
    cy.get('input[type=file]').selectFile('LHLpic2.jpeg')
    cy.contains('Submit').click()
    cy.contains('Welcome to Web Flex Bootcamp program!').should('be.visible')
    cy.get('h1').contains('Lighthouse Labs').should('not.exist')
  })
  it('Delete an existent Program successfully', () => {
    cy.contains('.card', 'Web Flex Bootcamp') 
    .children('.card-footer')
    .children('button.btn.btn-danger')
    .click()
    cy.contains('Yes').click()
    cy.get('.card-title').contains('Web Flex Bootcamp').should('not.exist')
  })
})

describe('Program List - Pages Load', () => {
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
  it('Program View page loaded successfully', () => {

  })
  it('Program Edit page loaded successfully', () => {

  })
  it('Program Delete dialog loaded successfully', () => {

  })
})