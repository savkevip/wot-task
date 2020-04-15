describe("SoundWidget", () => {
  it("Turn of sound", () => {
    cy.visit("baseUrl");
    cy.get(".sound-btn").click();
  });
});
