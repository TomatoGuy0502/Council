import Vue from 'vue'
import Vuex from 'vuex'
import { delibration } from '../api/delibration'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      isLogin: false,
      position: ''
    },
    errorInfo: {
      showError: false,
      errorType: 'login'
    },
    delibrationInfo: {
      semester: 0,
      period: 0,
      name: ''
    },
    delibrations: []
  },
  mutations: {
    setUserInfo (state, position) {
      state.userInfo = {
        isLogin: true,
        position
      }
    },
    setErrorWindow (state, { showError = false, errorType = '' }) {
      state.errorInfo = {
        showError, errorType
      }
    },
    setDelibrations (state, delibrations) {
      state.delibrations = delibrations
    },
    setDelibrationInfo (state, { semester, period, name }) {
      state.delibrationInfo = {
        semester, period, name
      }
    }
  },
  actions: {
    async setDelibrations ({ commit }) {
      const response = await delibration()
      commit('setDelibrations', response.data)
    }
  },
  modules: {
  }
})
