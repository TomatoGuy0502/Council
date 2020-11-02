export const moduleError = {
  namespaced: true,
  state: () => ({
    showError: false,
    errorType: 'login'
  }),
  mutations: {
    setErrorWindow (state, { showError, errorType }) {
      state.showError = showError
      state.errorType = errorType
    }
  },
  actions: {
    setErrorWindow ({ commit }, { showError = false, errorType = '' }) {
      commit('setErrorWindow', { showError, errorType })
    }
  }
}
