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
      isVoting: false,
      votingType: 'resolution'
    },
    isLoding: false
  },
  mutations: {
    setVotingStatus (state, toStatus) {
      state.votingInfo = {
        ...state.votingInfo,
        ...toStatus
      }
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
    },
    SOCKET_closeVote ({ commit }) {
      commit('setVotingStatus', false)
    },
    SOCKET_startResolutionVote ({ commit }) {
      console.log('開始決議案投票')
      commit('setVotingStatus', {
        isVoting: true,
        votingType: 'resolution'
      })
    },
    SOCKET_startAmendmentVote ({ commit }) {
      console.log('開始修正案投票')
      commit('setVotingStatus', {
        isVoting: true,
        votingType: 'amendment'
      })
    },
    SOCKET_closeResolutionVote ({ commit }) {
      console.log('結束決議案投票')
      commit('setVotingStatus', {
        isVoting: false,
        votingType: 'resolution'
      })
    },
    SOCKET_closeAmendmentVote ({ commit }) {
      console.log('結束修正案投票')
      commit('setVotingStatus', {
        isVoting: false,
        votingType: 'amendment'
      })
    }
  },
  modules: {
    user: moduleUser,
    error: moduleError,
    delibration: moduleDelibration
  }
})
