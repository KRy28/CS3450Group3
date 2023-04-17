// src/store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedCar: null
  },
  mutations: {
    setSelectedCar(state, car) {
      state.selectedCar = car;
    }
  },
  actions: {
    setSelectedCar({ commit }, car) {
      commit('setSelectedCar', car);
    }
  }
});
