import NProgress from 'nprogress';

import 'nprogress/nprogress.css';

import router from './router';

import { getToken } from '@/utils/auth';
import { getPageTitle } from '@/utils/dom';

const loginPath = '/login';
const whiteList = [loginPath];

router.beforeEach((to, from, next) => {
  const toPath = to.path;

  NProgress.start();

  document.title = getPageTitle(to.meta.title);

  let token = getToken();

  if (to.matched.some(r => r.meta.auth)) {
    if (token) {
      next();
      NProgress.done();
    } else {
      if (whiteList.includes(toPath)) {
        next();
        NProgress.done();
      } else {
        next(`${loginPath}?redirect=${toPath}`);
        NProgress.done();
      }
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

