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
  watch: {
    $route: {
      deep: true,
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
  },
};
</script>

<style lang="less">
@import "./assets/style/common";
.el-menu-demo {
  display: flex;
  justify-content: center;
}
.router-link {
  display: inline-block;
  height: 100%;
  width: 100%;
}
</style>
