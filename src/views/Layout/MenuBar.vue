<template>
  <div>
    <h3>MenuBar Component</h3>
    <router-link v-for="menu in menuList"
                 :to="menu.link"
                 :key="menu.name">{{ menu.title }}</router-link>
  </div>
</template>

<script>
import menuList from '@/config/menuList';

export default {
  name: 'MenuBar',
  data () {
    return {
      menuList
    };
  }
};
</script>

<style scoped>

</style>
