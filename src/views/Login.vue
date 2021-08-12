<template>
  <div class="page-container">
    <el-divider content-position="left">
      <h1>用户登录</h1>
    </el-divider>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="userInfo"
    >
      <el-form-item label="账号">
        <el-input class="user-info_email" v-model="userInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          type="password"
          class="user-info_pass"
          v-model="userInfo.pass"
        ></el-input>
      </el-form-item>

      <div style="text-align: center">
        <el-button
          :loading="isDisabled"
          id="loginBtn"
          type="primary"
          @click="loginHandle"
        >
          登&nbsp;&nbsp;录
        </el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      userInfo: {
        email: this.$route.query.email || "",
        pass: "",
      },
      isDisabled: false,
    };
  },
  created() {
    const userName = localStorage.getItem("userName");
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      this.$message.warning(`用户 ${userName} 处于登录状态`);
      this.$router.replace("/home");
    }
  },
  methods: {
    loginHandle() {
      this.isDisabled = true;
      this.$http
        .post("/api/userInfo/login", { ...this.userInfo })
        .then((res) => {
          this.isDisabled = false;
          const { name, email, tel } = res.data;
          this.$message.success(`恭喜：${name} 登录成功`);

          localStorage.setItem("isLogin", true);
          localStorage.setItem("userName", name);
          localStorage.setItem("email", email);
          localStorage.setItem("tel", tel);

          this.$router.push(`/home`);
        })
        .catch(() => {
          this.isDisabled = false;
        });
    },
  },
};
</script>
