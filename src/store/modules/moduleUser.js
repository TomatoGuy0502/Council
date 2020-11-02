export const moduleUser = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    position: ''
  }),
  mutations: {
    setUserInfo (state, { isLogin, position }) {
      state.isLogin = isLogin
      state.position = position
    }
  },
  actions: {
    setUserInfo ({ commit }, position) {
      commit('setUserInfo', {
        isLogin: true,
        position
      })
    }
  }
}
