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

  it('Should display the form and its two inpurts', () => {
    cy.get('[placeholder="Title..."]').should('be.visible')
    cy.get('[placeholder="URL to Shorten..."]').should('be.visible')
    cy.get('button').should('be.visible').should('contain', 'Shorten Please!')
  })

  it('Should show a user\'s input values', () => {
    cy.get('[placeholder="Title..."]').type('Test Title').invoke('val').should('equal', 'Test Title')
    cy.get('[placeholder="URL to Shorten..."]').type('Test URL').invoke('val').should('equal', 'Test URL')
  })

  it('Should render a newly submitted URL', () => {
    cy.intercept({method: 'POST', url: 'http://localhost:3001/api/v1/urls'}, { 
      long_url: "https://example.com/",
      title: 'Test Case 2'
     })
    cy.intercept( {method: 'GET', url: 'http://localhost:3001/api/v1/urls'}, { fixture: 'get_stub2.json' })
    cy.get('[placeholder="Title..."]').type('Test Title')
    cy.get('[placeholder="URL to Shorten..."]').type('Test URL')
    cy.get('button').click()
    cy.get('section > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > h3').should('be.visible').should('contain', 'Test Case 2')
    cy.get(':nth-child(2) > a').should('be.visible').should('contain', 'http://localhost:3001/useshorturl/2')
  })
})
