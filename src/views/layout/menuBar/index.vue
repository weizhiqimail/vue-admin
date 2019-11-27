<script>
import menuList from '@/config/menuList';

export default {
  name: 'menuBar',
  data () {
    return {
      menuList,
      activeMenu: ''
    };
  },
  render () {
    return (
      <el-menu
        default-active={this.activeMenu}
        onSelect={this.handleSelect}
      >
        {
          this.menuList.map(menu => {
            const children = menu.children;
            if (!children) {
              return (
                <router-link to={menu.link}>
                  <el-menu-item index={menu.index}>{menu.title}</el-menu-item>
                </router-link>
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
                            <router-link to={child.link}>
                              <el-menu-item index={child.index}>{child.title}</el-menu-item>
                            </router-link>
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
  },
  methods: {
    handleSelect (currentIndex, indexArray) {
      this.activeMenu = currentIndex;
      this.$localStorage.set('activeMenu', this.activeMenu);
    },
    getRedirectIndex () {
      const { path } = this.$route;

      let menuLength = menuList.length;
      let currentMenu;
      for (let i = 0; i < menuLength; i++) {
        const menu = menuList[i];
        const children = menu.children;
        if (children) {
          let childrenLength = children.length;
          for (let j = 0; j < childrenLength; j++) {
            const child = children[j];
            if (child['link'] === path) {
              currentMenu = child;
              break;
            }
          }
        } else {
          if (menu['link'] === path) {
            currentMenu = menu;
            break;
          }
        }
      }
      return currentMenu;
    }
  },
  created () {
    const currentMenu = this.getRedirectIndex();
    if (currentMenu) {
      this.activeMenu = currentMenu.index;
    } else {
      let activeMenu = this.$localStorage.get('activeMenu');
      if (activeMenu) {
        this.activeMenu = activeMenu;
      } else {
        this.activeMenu = '1';
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
