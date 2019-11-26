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
        component: () => import(/* webpackChunkName: "Dashboard" */ '@/views/Dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'dashboard'
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
