export default {
  methods: {
    getCurrentMenu (menuList) {
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
  }
};
