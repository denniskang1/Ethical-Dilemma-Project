import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueSimpleAlert from "vue-simple-alert"

Vue.use(VueSimpleAlert);

let app

if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
}