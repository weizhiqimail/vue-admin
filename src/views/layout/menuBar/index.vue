<script>
import menuList from '@/config/menuList';

export default {
  name: 'menuBar',
  data () {
    return {
      menuList,
      defaultOpened: ['1', '1']
    };
  },
  render () {
    return (
      <el-menu default-openeds={this.defaultOpened}
        router={true}
      >
        {
          this.menuList.map(menu => {
            const children = menu.children;
            if (!children) {
              return (
                <el-menu-item index={menu.link}>{menu.title}</el-menu-item>
              );
            } else {
              return (
                <el-submenu index={menu.index}>
                  <template slot="title">{menu.title}</template>
                  {
                    <el-menu-item-group>
                      {
                        menu.children.map(child => {
                          return (
                            <el-menu-item index={child.link}>{child.title}</el-menu-item>
                          );
                        })
                      }
                    </el-menu-item-group>
                  }
                </el-submenu>
              );
            }
          })
        }
      </el-menu>
    );
  }
};
</script>

<style scoped>

</style>
