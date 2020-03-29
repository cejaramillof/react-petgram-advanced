describe('Mi primer test', function () {
  it('para ver si funciona', function () {
    expect(true).to.equal(true)
  })
})

describe('Petgram', function () {
  it('Returns the app on visited', function () {
    cy.visit('/')
  })
})

it('navigate to a category and see cards', function () {
  cy.visit('/pet/1')
  cy.get('article')
})

it('navigate using the navbar to the home', function () {
  cy.visit('/pet/1')

  cy.get('nav a').first().click()
  cy.url().should('include', '/')
})

it('A non registered user see forms to register and login on favs page', function () {
  cy.visit('/favs')
  cy.get('form').should('have.length', 2)
})