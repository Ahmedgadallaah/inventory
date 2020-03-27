
require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import VueRouter from 'vue-router';
import routes from './routes.js' ;
import App from './components/App.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass:'active',
    routes: routes
});

new Vue(vue.util.extend({router} , App)).$mount('#app');
const app = new Vue({
    el: '#app',
});
