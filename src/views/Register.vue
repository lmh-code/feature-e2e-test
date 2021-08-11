<template>
  <div class="page-container">
    <h1>用户注册</h1>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="userInfo"
    >
      <el-form-item label="姓名">
        <el-input class="user-info_name" v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input class="user-info_email" v-model="userInfo.email"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input class="user-info_tel" v-model="userInfo.tel"></el-input>
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
          this.$message.success(`恭喜：${res.data.name} 注册成功`);
        })
        .catch(() => {
          this.isDisabled = false;
          this.$message.error("注册失败");
        });
    },
  },
};
</script>
