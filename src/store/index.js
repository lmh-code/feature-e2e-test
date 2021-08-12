import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: localStorage.getItem("userName") || "",
  },
  mutations: {
    SET_USERNAME(state, data) {
      state.userName = data;
    },
  },
  actions: {
    SET_USERNAME({ commit }, data) {
      commit("SET_USERNAME", data);
    },
  },
  modules: {},
});
