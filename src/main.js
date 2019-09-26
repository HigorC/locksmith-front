import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'

import VueRouter from 'vue-router'

import './styles/main.scss'
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false

import routes from './routes';

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
