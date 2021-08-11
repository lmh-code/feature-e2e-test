<template>
  <div class="home">
    <img alt="Vue logo" class="logo-img" src="../assets/logo.png" />
    <h1>欢迎使用vue</h1>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    getUserList() {
      this.$http
        .get("/api/userInfo/getUsers")
        .then((res) => {
          console.log("res:", res);
        })
        .catch((e) => {
          console.log("e:", e);
        });
    },
  },
};
</script>
<style scoped lang="less">
.home {
  text-align: center;
  img {
    margin: 50px 0;
  }
}
</style>
