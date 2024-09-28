const state = {
  user: {
    account: "",
    password: "",
    accountIdentity: "",
    isLogin: false
  }
};

const mutations = {
  setUser(state, userData) {
    state.user.account = userData.account;
    state.user.password = userData.password;
    state.user.accountIdentity = userData.accountIdentity;
    state.user.isLogin = true;
  },
  clearUser(state) {
    state.user.account = "";
    state.user.password = "";
    state.user.accountIdentity = "";
    state.user.isLogin = false;
  }
};

const actions = {
  login({ commit }, user) {
    // 登入邏輯
    commit('setUser', user);
  },
  logout({ commit }) {
    // 登出邏輯
    commit('clearUser');
  }
};

const getters = {
  getUserData: (state) => {
    return state.user;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};