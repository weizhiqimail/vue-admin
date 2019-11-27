<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import menuList from '@/config/menuList';

export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      linkList: []
    };
  },
  methods: {
    getLinkList () {
      this.linkList = menuList.map(menu => {
        const children = menu.children;
        if (children) {
          return children.map(child => {
            return child.link;
          });
        } else {
          return menu.link;
        }
      }).flat();
    },
    onLogin () {
      this.$localStorage.set('token', 'hello');
      const { query } = this.$route;
      const redirect = query.redirect;

      if (redirect && this.linkList.includes(redirect)) {
        this.$router.push(redirect);
      } else {
        this.$router.push('/');
      }
    }
  },
  created () {
    this.getLinkList();
  }
};
</script>

<style lang="scss" scoped>

</style>
