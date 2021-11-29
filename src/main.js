// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Módulo para pedir datos a una API
import VueResource from 'vue-resource';
Vue.use(VueResource);

// Módulo para simular una especie de navegación en mi aplicación sin pedir nada al servidor
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Test from './components/Test';
import User from './components/User';
import Lista from './components/Lista';

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: User
        },
        {
            path: '/test',
            component: Test
        },
        {
            path: '/lista',
            component: Lista
        }
    ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    components: { App },
    template: '<App/>'
}).$mount('#app');
