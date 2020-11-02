import { delibration } from '@/api/delibration'

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
    async setDelibrations ({ commit }) {
      const response = await delibration()
      commit('setDelibrations', response.data)
    },
    setDelibrationInfo ({ commit }, { semester, period, name }) {
      commit('setDelibrationInfo', { semester, period, name })
    }
  }
}
