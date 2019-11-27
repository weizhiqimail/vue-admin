<template>
  <div class="column-center">
    <el-link @click="jumpToPage" icon="el-icon-message-solid">通知</el-link>
  </div>
</template>

<script>
export default {
  name: 'notice',
  methods: {
    jumpToPage () {
      this.$router.push('/notice');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
