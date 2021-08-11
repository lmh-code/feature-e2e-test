describe("测试App.vue", () => {
  it("Visits the app root url", () => {
    // 没什么可测的
    cy.visit("/");

    cy.root().should("match", "html");
  });

  it("测试cy.get()", () => {
    cy.get(".router-link.demo").click();
  });
});
