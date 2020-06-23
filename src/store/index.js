import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      isLogin: false,
      position: ''
    }
  },
  mutations: {
    login(state, position) {
      state.userInfo.isLogin = true;
      state.userInfo.position = position;
    },
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  actions: {
    login ({commit}, position) {
      commit('login', position)
    },
    getUserInfo({commit}) {
      commit('getUserInfo')
    }
  },
  modules: {
  }
})
