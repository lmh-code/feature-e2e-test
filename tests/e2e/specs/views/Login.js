describe("测试Login.vue", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("h1标签内容", () => {
    cy.contains("h1", "用户登录");
  });

  it("模拟用户登录", () => {
    cy.get(".user-info_email")
      .find("[class='el-input__inner']")
      .focus()
      .type("liuminghao01@longfor.com");

    cy.get(".user-info_pass")
      .find("[class='el-input__inner']")
      .focus()
      .type("admin11@Zz");

    cy.get("#loginBtn").click();
  });
});
