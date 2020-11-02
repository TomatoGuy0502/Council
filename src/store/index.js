import Vue from 'vue'
import Vuex from 'vuex'
// import { delibration } from '../api/delibration'
import { moduleUser } from './modules/moduleUser'
import { moduleError } from './modules/moduleError'
import { moduleDelibration } from './modules/moduleDelibration'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    votingInfo: {
      isVoting: false
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: moduleUser,
    error: moduleError,
    delibration: moduleDelibration
  }
})
