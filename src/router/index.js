import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/layout';
import Login from '@/views/login';
import NotFound from '@/views/notFound';

Vue.use(VueRouter);

const isProd = process.env.NODE_ENV === 'production';

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
          icon: 'home',
          auth: true
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user'),
        meta: {
          title: '用户',
          icon: 'user',
          auth: true
        },
        children: [
          {
            path: '/user/center',
            name: 'user-center',
            component: () => import('@/views/user/user-center'),
            meta: {
              title: '用户中心',
              icon: 'user',
              auth: true
            }
          },
          {
            path: '/user/material',
            name: 'user-material',
            component: () => import('@/views/user/user-material'),
            meta: {
              title: '用户材料',
              icon: 'material',
              auth: true
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
      icon: 'login',
      auth: false
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: {
      title: '页面不存在',
      icon: '404',
      auth: true
    }
  }
];

const notFoundRoute = {
  path: '*',
  redirect: '/404'
};

if (!isProd) {
  routes.push(notFoundRoute);
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
