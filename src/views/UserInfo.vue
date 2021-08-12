<template>
  <div class="page-container">
    <el-divider content-position="left">
      <h1>个人信息</h1>
    </el-divider>
    <div class="user-info" v-loading="loading">
      <p>
        姓名： <span class="user-info_name">{{ userInfo.name }}</span>
      </p>
      <p>
        邮箱： <span class="user-info_email">{{ userInfo.email }}</span>
      </p>
      <p>
        电话： <span class="user-info_tel">{{ userInfo.tel }}</span>
      </p>
      <p>
        工作：<span class="user-info_job">{{ userInfo.job }}</span>
      </p>
      <p>
        年龄：<span class="user-info_age">{{ userInfo.age }}</span>
      </p>
      <el-button
        :loading="isDisabled"
        id="loginOutBtn"
        type="primary"
        @click="loginOut"
      >
        退出登录
      </el-button>
      <el-divider></el-divider>
      <pre>
        {{ userInfo }}
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      userInfo: {},
      isDisabled: false,
    };
  },
  created() {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      this.getUserInfo();
    } else {
      this.$message.warning("请先登录");
      this.$router.replace("/login");
    }
  },
  methods: {
    /**
     * @description: 获取用户基本信息
     */
    getUserInfo() {
      this.loading = true;
      const account = localStorage.getItem("email");
      this.$http
        .post(`/api/userInfo/getUserInfo`, { account })
        .then((res) => {
          this.loading = false;
          this.userInfo = { ...res.data };
        })
        .catch(() => {
          this.loading = false;
        });
    },
    loginOut() {
      localStorage.clear();

      this.isDisabled = true;
      setTimeout(() => {
        this.$message.success("退出登录成功");
        this.$store.dispatch("SET_USERNAME", "-");
        this.isDisabled = false;
        this.$router.push("/login");
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.user-info {
  width: 100%;
  min-height: 200px;
}
</style>
