import Vue from 'vue';
import router from './router/router.js';
import store from './store/global.js';
import App from './views/app.vue';

import '@/directives/index';// 配置了webpack的resolve的@

// import './styles/index.css';
import './styles/common.scss';
// import './assets/bg.jpeg';
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
