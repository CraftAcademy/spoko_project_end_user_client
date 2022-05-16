describe("Order a product", () => {
  beforeEach(() => {
    
    cy.intercept("GET", "**/api/products", {
      fixture: "products.json",
    });
    cy.intercept("POST", "**/api/orders", {
      fixture: "order.json",
    }).as("Orders.create");
    cy.visit("/products");
    cy.get("[data-cy=order-button]").last().click();
  });
  it("is expected to make a POST request", () => {
    cy.wait("@Orders.create").its("request.method").should("eq", "POST");
  });

  it("is expected to see oder-botten", () => {
    cy.get("[data-cy=order-button]").should("be.visible")
  })

  it("is expected to respond with a message", () => {
    cy.get("#message-box-order-create").should(
      "contain.text",
      "1 Soccer Shoe was added to your order"
    );
  });
});