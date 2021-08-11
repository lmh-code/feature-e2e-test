describe("测试Home.vue", () => {
  it("visit the home root url", () => {
    cy.visit("/home");
  });

  // it("测试全屏截图", () => {
  //   cy.screenshot(`e2e_test_${new Date().getTime()}`);
  // });

  // it("测试指定元素截图", () => {
  //   cy.get(".logo-img").screenshot(`logo_img_${new Date().getTime()}`);
  // });

  it("测试获取元素和属性内容  cy.get", () => {
    // cy.get()  https://example.cypress.io/commands/querying#get

    cy.get(".logo-img");
    cy.get(".logo-img").should("have.class", "logo-img");
    cy.get(".logo-img").invoke("attr", "alt").should("equal", "Vue logo");
    cy.get(".logo-img")
      .invoke("attr", "src")
      .should("contain", "/assets/img/logo");
  });

  it("测试 h1 标签中内容", () => {
    cy.contains("h1", "欢迎使用");
  });
});
