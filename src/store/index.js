import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    position: ''
  },
  mutations: {
    setLoginData(state, position) {
      state.isLogin = true;
      state.position = position;
    }
  },
  actions: {
  },
  modules: {
  }
})
