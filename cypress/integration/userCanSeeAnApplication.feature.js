describe('user can see an app', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/articles', {
      fixture: 'articles.json',
    })
    cy.visit('/', )
  })

  it('is expected to show app', () => {
    cy.get('#name').should('contain.text', 'Spoko')
  })
})