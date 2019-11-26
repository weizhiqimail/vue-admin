<template>
  <div class="m-header space-between">
    <NavBar></NavBar>
    <Profile></Profile>
  </div>
</template>

<script>
import NavBar from '../navBar';
import Profile from '../profile';
export default {
  name: 'MHeader',
  components: {
    NavBar,
    Profile
  }
};
</script>

<style lang="scss" scoped>
</style>
