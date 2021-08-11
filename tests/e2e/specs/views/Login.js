describe("测试Login.vue", () => {
  it("h1标签内容", () => {
    cy.visit("/login");
    cy.contains("h1", "用户登录");
  });

  it("模拟用户登录", () => {
    cy.get(".user-info_name")
      .find("[class='el-input__inner']")
      .focus()
      .type("刘明豪");

    cy.get(".user-info_email")
      .find("[class='el-input__inner']")
      .focus()
      .type("liuminghao01@longfor.com");

    cy.get(".user-info_tel")
      .find("[class='el-input__inner']")
      .focus()
      .type("13126972690");

    cy.get("#loginBtn").click();
  });
});
