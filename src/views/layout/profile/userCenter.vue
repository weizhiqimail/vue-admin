<template>
  <div class="column-center">
    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-user-solid pr-4"></i>jack
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span @click="onLogout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'userCenter',
  methods: {
    onLogout () {
      this.$router.push(this.$constant.login);
      this.$localStorage.clear();
    }
  }
};
</script>

<style scoped>

</style>
