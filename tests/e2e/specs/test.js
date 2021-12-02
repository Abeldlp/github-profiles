// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the landing page', () => {
    cy.visit('/')
    cy.contains('Github Profile Peaker')
    cy.contains('Checkout')
  })
})
