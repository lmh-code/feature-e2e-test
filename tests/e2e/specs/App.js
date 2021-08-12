describe("测试App.vue", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the app root url", () => {
    cy.root().should("match", "html");
  });

  it("测试cy.get()", () => {
    cy.get(".router-link.demo").click();
  });

  it("测试菜单数量", () => {
    cy.get(".router-link").should("have.length", 5);
  });
});
