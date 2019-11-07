import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user/user'
import Assets from './modules/assets/assets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: User,
    assets: Assets
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
