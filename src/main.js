import Vue from 'vue'
import App from './App.vue'
import router from './router.js'


let app

if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
}