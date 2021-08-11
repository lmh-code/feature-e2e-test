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
  methods: {
    loginHandle() {
      this.isDisabled = true;
      this.$http
        .post("/api/userInfo/register", { ...this.userInfo })
        .then((res) => {
          this.isDisabled = false;
          const { name } = res.data;
          this.$message.success(`恭喜：${name} 登录成功`);

          this.$router.push(`/home`);
        })
        .catch(() => {
          this.isDisabled = false;
          this.$message.error("登录失败");
        });
    },
  },
};
</script>
