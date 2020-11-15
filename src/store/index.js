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
    },
    isLoding: false
  },
  mutations: {
    setVotingStatus (state, toStatus) {
      state.votingInfo.isVoting = toStatus
    },
    setLodingStatus (state, toStatus) {
      state.isLoding = toStatus
    }
  },
  actions: {
    setVotingStatus ({ commit }, toStatus) {
      commit('setVotingStatus', toStatus)
    },
    setLodingStatus ({ commit }, toStatus) {
      commit('setLodingStatus', toStatus)
    }
  },
  modules: {
    user: moduleUser,
    error: moduleError,
    delibration: moduleDelibration
  }
})
