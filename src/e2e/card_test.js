describe("Card", () => {
  it("Card content", () => {
    cy.visit("baseUrl");
    cy.get(".model-image").should("have.attr", "src").should("include", ".png");
    cy.get(".tier-icon-image")
      .should("have.attr", "src")
      .should("include", ".svg");
  });
});
