// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCar: null,
    user: null
  },
  mutations: {
    setSelectedCar(state, car) {
      state.selectedCar = car;
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setSelectedCar({ commit }, car) {
      commit('setSelectedCar', car);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  
  getters: {
    getUser(state) {
      return state.user
    },
    getSelectedCar(state) {
      return state.selectedCar
    }
  }
});
