describe('dashboard', () => {
  beforeEach(() => {
    cy.intercept( {method: 'GET', url: 'http://localhost:3001/api/v1/urls'}, { fixture: 'get_stub.json' })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the page title and existing urls', () => {
    cy.get('h1').should('contain', 'URL Shortener')
    cy.get('.url').should('be.visible')
    cy.get('h3').should('be.visible').should('contain', 'test case')
    cy.get('a').should('be.visible').should('contain', 'http://localhost:3001/useshorturl/1')
    cy.get('p').should('contain', 'https://example.com/')
  })

  it('Should displ')
})