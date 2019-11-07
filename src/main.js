import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueSocketIO from 'vue-socket.io'

//My components import
import Navbar from './components/Navbar'
import Footer from './components/Footer'

Vue.config.productionTip = false

//Using my components
Vue.component('Navbar', Navbar)
Vue.component('Footer', Footer)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://ws.kraken.com',
  vuex: {
    store,
    actionPrefix: "SOCKET_",
    mutationPrefix: "SOCKET_",
    // options: {
    //   useConnectionNamespace: true
    // }
  }
}));

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
