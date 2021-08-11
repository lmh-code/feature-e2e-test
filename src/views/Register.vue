<template>
  <div class="page-container">
    <el-divider content-position="left">
      <h1>用户注册</h1>
    </el-divider>

    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="userInfo"
    >
      <el-form-item label="姓名">
        <el-input
          type="text"
          class="user-info_name"
          v-model="userInfo.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          type="text"
          class="user-info_email"
          v-model="userInfo.email"
        ></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input
          type="phone"
          class="user-info_tel"
          v-model="userInfo.tel"
          :maxlength="11"
        ></el-input>
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
          id="registerBtn"
          type="primary"
          @click="registerHandle"
        >
          注&nbsp;&nbsp;册
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
        name: "",
        email: "",
        tel: "",
        pass: "",
      },
      isDisabled: false,
    };
  },
  methods: {
    registerHandle() {
      // const successMsg = `注册成功：<br/> 姓名：${this.userInfo.name}<br/> 邮箱：${this.userInfo.email}<br/> 电话：${this.userInfo.tel}<br/>`;
      // this.$message({
      //   type: "success",
      //   dangerouslyUseHTMLString: true,
      //   message: successMsg,
      // });

      this.isDisabled = true;
      this.$http
        .post("/api/userInfo/register", { ...this.userInfo })
        .then((res) => {
          this.isDisabled = false;
          const { name, email } = res.data;
          this.$message.success(`恭喜：${name} 注册成功`);

          this.$router.push(`/login?email=${email}`);
        })
        .catch(() => {
          this.isDisabled = false;
        });
    },
  },
};
</script>
