export const moduleUser = {
  namespaced: true,
  state: () => ({
    isLogin: false,
    isLeader: false,
    studentID: ''
  }),
  mutations: {
    login (state, { isLeader, studentID }) {
      state.isLogin = true
      state.isLeader = isLeader
      state.studentID = studentID
    },
    logout (state) {
      state.isLogin = false
      state.isLeader = false
      state.studentID = false
    }
  },
  actions: {
    login ({ commit }, { isLeader, studentID }) {
      commit('login', {
        isLeader,
        studentID
      })
    },
    logout ({ commit }) {
      commit('logout')
    }
  }
}
