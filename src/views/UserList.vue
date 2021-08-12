<template>
  <div class="page-container">
    <el-divider content-position="left">
      <h1>用户列表</h1>
    </el-divider>

    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="tel" label="电话"> </el-table-column>
      <el-table-column prop="pass" label="密码"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="job" label="工作"> </el-table-column>
      <el-table-column label="操作" fixed="right">
        <div slot-scope="scope">
          <el-button
            :loading="deleteLoading && +currentId === +scope.row.id"
            :disabled="deleteLoading && +currentId === +scope.row.id"
            class="delete-btn"
            type="text"
            @click="deleteHandle(scope.row)"
            >删除</el-button
          >
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      tableData: [],
      deleteLoading: false,
      currentId: -1,
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = true;
      this.$http
        .get("/api/userInfo/getUsers")
        .then((res) => {
          this.loading = false;
          this.tableData = res.data;

          this.$nextTick(() => {
            console.log(
              "删除按钮:",
              document.getElementsByClassName("delete-btn")
            );
          });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    deleteHandle(row) {
      this.deleteLoading = true;
      this.currentId = row.id;
      setTimeout(() => {
        this.$http
          .post("/api/userInfo/deleteUsers", { id: row.id })
          .then(() => {
            this.deleteLoading = false;
            this.$message.success(`删除${row.name}成功`);

            this.getUsers();
          })
          .catch(() => {
            this.deleteLoading = false;
          });
      }, 3000);
    },
  },
};
</script>
