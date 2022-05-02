// describe('Program List - Page Load per action button', () => {
//   beforeEach(function () {
//     cy.visit('/program')
//   })
//   it('Program List page loaded successfully', () => {
//     cy.contains('Welcome to the Program List page!').should('be.visible')
//   })
//   it('Program Create page loaded successfully', () => {
//     cy.contains('Add a New Program').click()
//     cy.contains('Create new program').should('be.visible')
//   })
//   it('Program View page loaded successfully', () => {
//     cy.get(".card").first()
//     .children('.card-footer')
//     .children('button.btn.btn-info')
//     .click()
//     cy.contains('Welcome to Intro of Coding program').should('be.visible')
//     cy.contains('Edit Program').should('be.visible')
//     cy.contains('Delete Program').should('be.visible')
//     cy.contains('Add a New Program').should('be.visible')
//     cy.contains('View All Programs').should('be.visible')
//   })
//   it('Program Edit page loaded successfully', () => {
//     cy.get(".card").first()
//     .children('.card-footer')
//     .children('button.btn.btn-secondary')
//     .click()
//     cy.contains('Edit existing program').should('be.visible')
//     cy.contains('Submit').should('be.visible')
//     cy.contains('Reset').should('be.visible')
//     cy.contains('Back to View Detail').should('be.visible')
//     cy.contains('Back to View All').should('be.visible')
//   })
//   it('Program Delete dialog loaded successfully', () => {
//     cy.get(".card").first()
//     .children('.card-footer')
//     .children('button.btn.btn-danger')
//     .click()
//     cy.contains('Confirm Deletion').should('be.visible')
//     cy.contains('Are you sure?').should('be.visible')
//     cy.contains('Yes').should('be.visible')
//     cy.contains('No').should('be.visible')
//     cy.contains('No').click()
//   })
// })

// describe('Program View - Page Load per action button', () => {
//   beforeEach(function () {
//     cy.visit('/program')
//     cy.get(".card").first()
//     .children('.card-footer')
//     .children('button.btn.btn-info')
//     .click()
//   })
//   it('Program Create page loaded successfully', () => {
//     cy.contains('Add a New Program').should('be.visible')
//     cy.contains('Add a New Program').click()
//     cy.contains('Create new program').should('be.visible')
//   })
//   it('Program Edit page loaded successfully', () => {
//     cy.contains('Edit Program').should('be.visible')
//     cy.contains('Edit Program').click()
//     cy.contains('Edit existing program').should('be.visible')
//   })
//   it('Program Delete dialog loaded successfully', () => {
//     cy.contains('Delete Program').should('be.visible')
//     cy.contains('Delete Program').click()
//     cy.contains('Confirm Deletion').should('be.visible')
//     cy.contains('Are you sure?').should('be.visible')
//     cy.contains('Yes').should('be.visible')
//     cy.contains('No').should('be.visible')
//     cy.contains('No').click()
//   })
//   it('Back to Program list page successfully', () => {
//     cy.contains('View All Programs').should('be.visible')
//     cy.contains('View All Programs').click()
//     cy.contains('Welcome to the Program List page!').should('be.visible')
//   })
// })

// describe('Program Form - Page Load per action button', () => {
//   beforeEach(function () {
//     cy.visit('/program')
//     cy.get(".card").first()
//     .children('.card-footer')
//     .children('button.btn.btn-secondary')
//     .click()
//   })
//   it('Program Edit page - Back to View Detail', () => {
//     cy.contains('Back to View Detail').should('be.visible')
//     cy.contains('Back to View Detail').click()
//     cy.contains('Welcome to Intro of Coding program').should('be.visible')
//   })
//   it('Program Edit page - Back to View All', () => {
//     cy.contains('Back to View All').should('be.visible')
//     cy.contains('Back to View All').click()
//     cy.contains('Welcome to the Program List page!').should('be.visible')
//   })
// })

// describe('Program pages - Basic CRUD actions', () => {
//   beforeEach(function () {
//     cy.visit('/program')
//   })
//   it('Add a new Program successfully', () => {
//     cy.contains('Add a New Program').click()
//     cy.get('input[name=name]').type('Lighthouse Labs')
//     cy.get('input[name=duration_days]').type('180')
//     cy.get('textarea[name=description]').type('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.')
//     cy.get('input[type=file]').selectFile('cypress/fixtures/LHLpic1.png')
//     cy.contains('Submit').click()
//     cy.contains('Welcome to Lighthouse Labs program!').should('be.visible')
//     cy.contains('View All Programs').click()
//     cy.contains('.card', 'Lighthouse Labs').should('be.visible')
//   })
//   it('View an existent Program successfully', () => {
//     cy.contains('.card', 'Lighthouse Labs') 
//       .children('.card-footer')
//       .children('button.btn.btn-info')
//       .click()
//     cy.contains('Welcome to Lighthouse Labs program!').should('be.visible')
//     cy.contains('Lighthouse Labs').should('be.visible')
//     cy.contains('180').should('be.visible')
//     cy.contains('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.').should('be.visible')
//     cy.get('img').should('be.visible')
//   })
//   it('Edit an existent program', () => {
//     cy.contains('.card', 'Lighthouse Labs')
//     .children('.card-footer')
//     .children('button.btn.btn-secondary')
//     .click()
//     cy.get('input[name=name]').clear().type('Web Flex Bootcamp')
//     cy.get('input[name=duration_days]').clear().type('270')
//     cy.get('textarea[name=description]').clear().type('Every test you write will include selectors for elements. To save yourself a lot of headaches, you should write selectors that are resilient to changes by: \nDon\'t target elements based on CSS attributes such as: id, class, tag \nDon\'t target elements that may change their textContent \nAdd data-* attributes to make it easier to target elements')
//     cy.get('input[type=file]').selectFile('cypress/fixtures/LHLpic2.jpeg')
//     cy.contains('Submit').click()
//     cy.contains('Welcome to Web Flex Bootcamp program!').should('be.visible')
//     cy.get('h1').contains('Lighthouse Labs').should('not.exist')
//   })
//   it('Delete an existent Program successfully', () => {
//     cy.contains('.card', 'Web Flex Bootcamp') 
//     .children('.card-footer')
//     .children('button.btn.btn-danger')
//     .click()
//     cy.contains('Yes').click()
//     cy.get('.card-title').contains('Web Flex Bootcamp').should('not.exist')
//   })
// })

describe('Program Form - Validations', () => {
  beforeEach (() => {
    cy.visit('/program')
  })
  it('Show errors on required fields for no data', () => {
    cy.contains('Add a New Program').click()
    cy.contains('Submit').click()
    cy.contains('Name is required').should('be.visible')
    cy.contains('Duration should be between 1 and 4000 days').should('be.visible')
    cy.contains('Description is required').should('be.visible')
    cy.contains('Picture is required').should('be.visible')
  })
  it('Hide errors on clicking Reset button', () => {
    cy.contains('Add a New Program').click()
    cy.contains('Submit').click()
    cy.contains('Reset').click()
    cy.contains('Name is required').should('not.exist')
    cy.contains('Duration should be between 1 and 4000 days').should('not.exist')
    cy.contains('Description is required').should('not.exist')
    cy.contains('Picture is required').should('not.exist')
  })
  it('Reset data back to empty on New form', () => {
    cy.contains('Add a New Program').click()
    cy.get('input[name=name]').type('Lighthouse Labs')
    cy.get('input[name=duration_days]').type('180')
    cy.get('textarea[name=description]').type('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.')
    cy.get('input[type=file]').selectFile('cypress/fixtures/LHLpic1.png')
    cy.contains('Reset').click()
    cy.get('input[name=name]').should('have.value', '');
    cy.get('input[name=duration_days]').should('have.value', '0');
    cy.get('textarea[name=description]').should('have.value', '');
    cy.get('input[type=file]').should('have.value', '');
  })
  it ('Reset data back to default on Edit form', () => {
    cy.contains('Add a New Program').click()
    cy.get('input[name=name]').type('Lighthouse Labs')
    cy.get('input[name=duration_days]').type('180')
    cy.get('textarea[name=description]').type('The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.')
    cy.get('input[type=file]').selectFile('cypress/fixtures/LHLpic1.png')
    cy.contains('Submit').click()
    cy.contains('Edit Program').click()
    let image_source1 = ""
    cy.get('form img').invoke('attr', 'src').then((src) => {
      image_source1 = src
    })
    cy.get('input[name=name]').clear().type('Web Flex Bootcamp')
    cy.get('input[name=duration_days]').clear().type('270')
    cy.get('textarea[name=description]').clear().type('Every test you write will include selectors for elements. To save yourself a lot of headaches, you should write selectors that are resilient to changes by: \nDon\'t target elements based on CSS attributes such as: id, class, tag \nDon\'t target elements that may change their textContent \nAdd data-* attributes to make it easier to target elements')
    cy.get('input[type=file]').selectFile('cypress/fixtures/LHLpic2.jpeg')
    cy.contains('Reset').click()
    cy.get('input[name=name]').should('have.value', 'Lighthouse Labs');
    cy.get('input[name=duration_days]').should('have.value', '180');
    cy.get('textarea[name=description]').should('have.value', 'The Cypress team prides itself on the ease of its install process. Remember that we need to make the right things easy. If it is hard to install the test framework, then it is less likely developers will go through all of the trouble.');
    cy.get('input[type=file]').should('have.value', '');
    cy.get('form img').invoke('attr', 'src').then((src) => {
      expect(src).equal(image_source1);
    })
    cy.contains('Back to View Detail').click()
    cy.contains('Delete Program').click()
    cy.contains('Yes').click()
  })
})