describe('Visitor can switch to football news category tab', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/articles', {
      fixture: 'articles.json',
    }).as('getArticles')
    cy.visit('/')
  })

  it('is expected to make a GET request to the API', () => {
    cy.wait('@getArticles').its('request.method').should('eq', 'GET')
  })

  it('is expected to display football News header', () => {
    cy.get('[data-cy=football-tab]').should('contain.text', 'Football')
  })

  it('is expected to display relevant category articles on clicking ', () => {
    cy.get('[data-cy=football-tab]').click()
    cy.get('[data-cy="category_header"]').should('contain', 'football')
  })
})

describe('visitor can switch to Golf news category tab', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/articles', {
      fixture: 'articles.json',
    }).as('getArticles')
    cy.visit('/')
  })

  it('is expected to display Golf News header', () => {
    cy.get('[data-cy=golf-tab]').should('contain.text', 'Golf')
  })
  it('is expected to display relevant category articles on clicking ', () => {
    cy.get('[data-cy=golf-tab]').click()
    cy.get('[data-cy=category_header]').should('contain', 'golf')
  })

  it('is expected to see Golf article title', () => {
    cy.get('[data-cy=golf-tab]').click()
    cy.get('[data-cy=articles-list]')
      .children()
      .first()
      .within(() => {
        cy.get('[data-cy=article-title]')
          .should('contain.text', "Furious'I  can't wait for this trip'")
          .and('be.visible')
      })
  })
})