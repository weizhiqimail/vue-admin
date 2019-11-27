<script>
import menuList from '@/config/menuList';
import routeMixin from '@/helper/mixins/route';
import * as TYPES from '@/store/mutationTypes';
import { mapMutations } from 'vuex';

export default {
  name: 'menuBar',
  mixins: [routeMixin],
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

      const menu = menuList.find(m => m.index === indexArray[0]);
      let subMenu;
      const children = menu.children;
      if (children) {
        subMenu = children.find(child => child.index === indexArray[1]);
      }
      let breadMenu = [menu];
      if (subMenu) {
        breadMenu.push(subMenu);
      }
      this.setBreadList(breadMenu);
    },
    ...mapMutations({
      setBreadList: TYPES.BREAD_LIST
    })
  },
  created () {
    const currentMenu = this.getCurrentMenu(menuList);
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
