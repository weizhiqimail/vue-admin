<script>
export default {
  name: 'navBar',
  data () {
    return {
      breadcrumbList: [
        {
          title: '首页',
          to: {
            path: '/'
          }
        }
      ]
    };
  },
  render () {
    return (
      <div class="navbar">
        <el-breadcrumb separator="/">
          {
            this.breadcrumbList.map(breadcrumb => {
              const to = breadcrumb.to;
              return (
                <el-breadcrumb-item className="cursor-pointer"
                  to={{ path: to.path }}
                >{breadcrumb.title}</el-breadcrumb-item>
              );
            })
          }
        </el-breadcrumb>
      </div>
    );
  }
};
</script>
