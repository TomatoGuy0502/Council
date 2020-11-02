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
    delibrations: [],
    votingInfo: {
      isVoting: false
    }
  },
  mutations: {
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    setErrorWindow (state, errorInfo) {
      state.errorInfo = errorInfo
    },
    setDelibrations (state, delibrations) {
      state.delibrations = delibrations
    },
    setDelibrationInfo (state, delibrationInfo) {
      state.delibrationInfo = delibrationInfo
    }
  },
  actions: {
    async setDelibrations ({ commit }) {
      const response = await delibration()
      commit('setDelibrations', response.data)
    },
    setUserInfo ({ commit }, position) {
      commit('setUserInfo', {
        isLogin: true,
        position
      })
    },
    setErrorWindow ({ commit }, { showError = false, errorType = '' }) {
      commit('setErrorWindow', { showError, errorType })
    },
    setDelibrationInfo ({ commit }, { semester, period, name }) {
      commit('setDelibrationInfo', { semester, period, name })
    }
  },
  modules: {
  }
})
