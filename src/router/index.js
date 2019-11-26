import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
        }
      },
      {
        path: 'user',
        component: () => import('@/views/User/index'),
        name: 'User',
        meta: {
          title: 'User',
          icon: 'user'
        }
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
