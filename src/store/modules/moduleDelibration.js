import { getAvailableDelibrations, getAllDelibrations } from '@/api/delibration'

export const moduleDelibration = {
  namespaced: true,
  state: () => ({
    delibrationInfo: {
      semester: 0,
      period: 0,
      name: ''
    },
    delibrations: []
  }),
  mutations: {
    setDelibrations (state, delibrations) {
      state.delibrations = delibrations
    },
    setDelibrationInfo (state, delibrationInfo) {
      state.delibrationInfo = delibrationInfo
    }
  },
  actions: {
    async setDelibrations ({ commit }, { isLeader = false } = {}) {
      let response
      if (isLeader) {
        response = await getAllDelibrations()
      } else {
        response = await getAvailableDelibrations()
      }
      commit('setDelibrations', response.data)
    },
    setDelibrationInfo ({ commit }, { semester, period, name }) {
      commit('setDelibrationInfo', { semester, period, name })
    }
  }
}
