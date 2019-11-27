<template>
  <div>
    <el-button type="primary" @click="onLogout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'userCenter',
  methods: {
    onLogout () {
      this.$router.push('/login');
      console.log('user-center page leave');
      this.$localStorage.clear();
    }
  }
};
</script>

<style scoped>

</style>
