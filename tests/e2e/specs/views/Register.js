describe("测试Register.vue", () => {
  it("h1标签内容", () => {
    cy.visit("/register");
    cy.contains("h1", "用户注册");
  });

  it("姓名输入框", () => {
    cy.get(".user-info_name")
      .find("[class='el-input__inner']")
      .focus()
      .type("liuminghao") // 输入姓名
      .wait(3000) // 延迟5秒
      .clear(); // 清空输入内容
  });

  it("输入注册信息并验证输入内容是否正确", () => {
    cy.get(".user-info_name")
      .find("[class='el-input__inner']")
      .focus()
      .type("刘明豪")
      .should("have.value", "刘明豪");

    cy.get(".user-info_email")
      .find("[class='el-input__inner']")
      .focus()
      .type("liuminghao01@longfor.com")
      .should("have.value", "liuminghao01@longfor.com");

    cy.get(".user-info_tel")
      .find("[class='el-input__inner']")
      .focus()
      .type("13126972690")
      .should("have.value", "13126972690");

    cy.get(".user-info_pass")
      .find("[class='el-input__inner']")
      .focus()
      .type("admin66@Zz")
      // .should("have.value", "admin66@Zz1"); // 会报错
      .should("have.value", "admin66@Zz");
  });

  it("注册", () => {
    cy.get("#registerBtn").click();
  });
});
