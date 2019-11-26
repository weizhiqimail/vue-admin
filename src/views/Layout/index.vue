<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <MenuBar></MenuBar>
      </el-col>
      <el-col :span="18">
        <router-view :key="key"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuBar from './MenuBar';

export default {
  name: 'Layout',
  components: {
    MenuBar
  },
  computed: {
    key () {
      return this.$route.path;
    }
  }
};
</script>
