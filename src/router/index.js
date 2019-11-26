import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '主页',
          icon: 'home'
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user'),
        meta: {
          title: '用户',
          icon: 'user'
        },
        children: [
          {
            path: '/user/center',
            name: 'user-center',
            component: () => import('@/views/user/user-center'),
            meta: {
              title: '用户中心',
              icon: 'user'
            }
          },
          {
            path: '/user/material',
            name: 'user-material',
            component: () => import('@/views/user/user-material'),
            meta: {
              title: '用户材料',
              icon: 'material'
            }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
