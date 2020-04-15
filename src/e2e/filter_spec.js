describe("Filters", () => {
  it("Filter tanks", () => {
    cy.visit("baseUrl");
    cy.get(".nation-select-btn").click();
    cy.get("span").contains("USA").click();
    cy.get("span").contains("USSR").click();
    cy.get(".tier-select-btn").click();
    cy.get("span").contains("VIII").click();
    cy.get(".premium-select-btn").click();
    cy.get("span").contains("Yes").click();
  });
});
