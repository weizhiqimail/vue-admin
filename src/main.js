// 第三方库
import Vue from 'vue';
import Element from 'element-ui';
import localStorage from 'local-storage';

import 'normalize.css/normalize.css';

import App from './App.vue';
import router from './router';
import './permission';
import settings from './settings';
import constant from '@/config/constant';

import '@/assets/styles/index.scss';

Vue.use(Element, {
  size: localStorage.get('size') || 'medium'
});

Vue.prototype.$localStorage = localStorage;
Vue.prototype.$settings = settings;
Vue.prototype.$constant = constant;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
