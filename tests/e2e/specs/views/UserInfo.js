describe("测试UserInfo.vue", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("h1标签内容", () => {
    // 确保已经登录 并设置登录信息
    localStorage.setItem("isLogin", true);
    localStorage.setItem("userName", "刘明豪");
    localStorage.setItem("email", "liuminghao01@longfor.com");
    localStorage.setItem("tel", "13126972690");

    cy.contains("h1", "个人信息");
  });

  it("测试获取到的个人信息是否正确", () => {
    cy.get(".user-info_name").should("have.text", "刘明豪");
    cy.get(".user-info_email").should("have.text", "liuminghao01@longfor.com");
    cy.get(".user-info_tel").should("have.text", "13126972690");
    cy.get(".user-info_job").should("have.text", "超酷的工作");
    cy.get(".user-info_age").should("have.text", "28");
  });

  it("测试调用真实接口", () => {
    cy.request({
      method: "get",
      url: "https://api.github.com/users/minghaoLiu1205",
    }).as("gitHubUserInfo");
    cy.get("@gitHubUserInfo").then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body.login).to.be.eq("minghaoLiu1205");
    });
  });

  it("模拟退出登录 4s 之后退出", () => {
    cy.wait(4000);
    cy.get("#loginOutBtn").click();
  });
});
