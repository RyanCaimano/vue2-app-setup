import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const persistedState = localStorage.getItem('devTeamMembers');
const initialState = persistedState ? JSON.parse(persistedState) : [];

export default new Vuex.Store({
  state: {
    devTeamMembers: initialState,
  },
  mutations: {
    addTeamMember(state, teamMember) {
      state.devTeamMembers.push(teamMember);
      localStorage.setItem('devTeamMembers', JSON.stringify(state.devTeamMembers));
    },
  },
  actions: {
    addTeamMember({ commit }, teamMember) {
      commit('addTeamMember', teamMember);
    },
  },
  getters: {
    devTeamMembers: (state) => state.devTeamMembers,
  },
});
