describe("Slider", () => {
  it("Slide tanks", () => {
    cy.visit("baseUrl");
    cy.get(".slider-btn-left").click();
    cy.get(".slider-btn-left").click();
    cy.get(".slider-btn-left").click();
    cy.get(".slider-btn-right").click();
    cy.get(".battle-btn").click();
  });
});
