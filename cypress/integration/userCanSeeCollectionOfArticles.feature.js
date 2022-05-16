describe("user can see a collection of articles", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/articles", {
      fixture: "articles.json",
    }).as("getArticles");

    cy.visit("/");
  });

  it("is expected to make a GET request to the API", () => {
    cy.wait("@getArticles").its("request.method").should("eq", "GET");
  });

  it("is expected to display a collection of 6 articles", () => {
    cy.get("[data-cy=articles-list]")
      .children()
      .first()
      .children()
      .should("have.length", 6);
  });

  it("is expected that the first article will be Football category", () => {
    cy.get("[data-cy=article-category]")
      .first()
      .should("contain.text", "Football");
  });
  it("is expected that the first article title will be FiFa 2022 championship", () => {
    cy.get("[data-cy=article-title]")
      .first()
      .should("contain.text", "FiFa 2022 championship");
  });
  it("is expected that the last article will be Golf category", () => {
    cy.get("[data-cy=articles-list]");
    cy.get("[data-cy=article-category]").last().should("contain", "Golf");
  });
});