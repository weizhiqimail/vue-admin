export default [
  {
    title: '主页',
    link: '/dashboard',
    icon: 'home',
    index: '1'
  },
  {
    title: '用户管理',
    icon: 'user',
    index: '2',
    children: [
      {
        title: '用户中心',
        link: '/user/center',
        name: 'user-center',
        index: '2-1'
      },
      {
        title: '用户材料',
        link: '/user/material',
        name: 'user-material',
        index: '2-2'
      }
    ]
  }
];
