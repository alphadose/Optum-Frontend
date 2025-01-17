/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';
import VueSweetalert2 from 'vue-sweetalert2';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

ShardsVue.install(Vue);

Vue.component('default-layout', Default);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
