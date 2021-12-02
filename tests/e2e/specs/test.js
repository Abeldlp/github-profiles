// https://docs.cypress.io/api/introduction/api.html

describe('Github Profiles', () => {
  it('Visits the landing page', () => {
    cy.visit('/')
    cy.contains('Github Profile Peaker')
    cy.contains('Checkout')
  })

  it('Redirects to profiles page', () => {
    cy.get('button').then(($btn) => {
      $btn.click()
    })
    cy.url().should('include', '/github-profiles')
  })

  it('Visits profiles page and loads profiles', () => {
    cy.visit('/github-profiles')
    cy.contains('Where it all started')
  })

  it('Can load a card', () => {
    cy.get('#github_card_container div').first().as('FirstCard')
    cy.get('@FirstCard').contains('Hide')
  })

  it('Can delete a card', () => {
    cy.get('#github_card_container div').first().as('FirstCard')
    cy.get('@FirstCard').find('#delete_button').click()
  })

  it('Can scroll on profile page', () => {
    cy.scrollTo(0, 500)
    cy.scrollTo('top')
  })

  it('Can load mobile version', () => {
    cy.viewport('iphone-6')
    cy.visit('/')
    cy.get('button').then(($btn) => {
      $btn.click()
    })
  })
})
