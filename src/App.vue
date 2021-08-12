<template>
  <div id="app" class="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#ffffff"
      active-text-color="#409EFF"
    >
      <el-menu-item index="/register">
        <router-link class="router-link demo" to="/register">
          注册
        </router-link>
      </el-menu-item>
      <el-menu-item index="/login">
        <router-link class="router-link" to="/login"> 登录 </router-link>
      </el-menu-item>
      <el-menu-item index="/home">
        <router-link class="router-link" to="/home"> 首页 </router-link>
      </el-menu-item>
      <el-menu-item index="/about">
        <router-link class="router-link" to="/about">个人中心</router-link>
      </el-menu-item>
      <el-menu-item index="/users">
        <router-link class="router-link" to="/users">用户列表</router-link>
      </el-menu-item>

      <div class="nav-user-info">
        <span class="nav-user-info_name">
          {{ userName || "-" }}
        </span>
        <div class="split"></div>
        <el-button id="loginOutBtn" type="text" @click="loginOut">
          退出登录
        </el-button>
      </div>
    </el-menu>

    <el-main>
      <router-view />
    </el-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "",
    };
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: function () {
        this.setDefaultActive();
      },
    },
  },
  mounted() {
    this.setDefaultActive();
  },
  methods: {
    setDefaultActive() {
      this.activeIndex = this.$route.path;
    },
    loginOut() {
      localStorage.clear();
      this.$message.success("退出登录成功");
      this.$store.dispatch("SET_USERNAME", "-");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less">
@import "./assets/style/common";
.el-menu-demo {
  display: flex;
  justify-content: center;
  position: relative;
  .nav-user-info {
    height: 100%;
    position: absolute;
    right: 20px;
    top: 0;
    display: flex;
    align-items: center;
    .nav-user-info_name {
      color: #ffffff;
    }
    .split {
      margin: 0 10px;
      height: 20px;
      width: 1px;
      background-color: #ffffff;
    }
  }
}
.router-link {
  display: inline-block;
  height: 100%;
  width: 100%;
}
</style>
