describe("测试UserList.vue", () => {
  beforeEach(() => {
    cy.visit("/users");
  });

  it("h1标签内容", () => {
    cy.contains("h1", "用户列表");
  });

  it("测试删除", () => {
    cy.get(".delete-btn").eq(5).click();
  });
});
