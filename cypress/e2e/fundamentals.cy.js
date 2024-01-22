describe("Fundamentals test", () => {
  beforeEach(() => {
    //beforeEach is used for anything to setup your test
    cy.visit("/fundamentals");
  });
  it("contains correct header text", () => {
    //cy.getDataTest is used because I have created a new cypress command in the commands.js file
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );  
  });
  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
