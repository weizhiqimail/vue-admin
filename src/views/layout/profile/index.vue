<template>
  <div class="space-between">
    <Notice></Notice>
    <Separator></Separator>
    <UserCenter></UserCenter>
  </div>
</template>

<script>
import Notice from './notice';
import UserCenter from "./userCenter";

import Separator from '@/components/separator';

export default {
  name: 'profile',
  components: {
    Notice,
    UserCenter,
    Separator
  }
};
</script>

<style scoped>

</style>
