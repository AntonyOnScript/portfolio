import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/css/style.css'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'hash'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
