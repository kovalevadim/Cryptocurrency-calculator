import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: User
  },
  state: {
    pair: []
  },
  getters: {},
  mutations: {},
  actions: {
    // SOCKET_ping: (state, date) => {
    //   console.log(date)
    // }
  }
})
