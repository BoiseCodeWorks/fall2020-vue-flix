import Vue from 'vue'
import Vuex from 'vuex'
import { api, sandbox } from '../services/AxiosService'

Vue.use(Vuex)

const key = "?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query="

export default new Vuex.Store({
  state: {
    searchResults: [],
    activeMovie: {}
  },
  // NOTE mutations are the only thing allowed to update the state
  mutations: {
    // NOTE the first parameter of a mutation is always the state
    setMovies(state, movies) {
      state.searchResults = movies
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie
    }
  },
  // NOTE actions are called by "dispatch" (actions[movieSearch]())
  actions: {
    // NOTE the first parameter is the VueMagic
    async movieSearch({ commit }, query) {
      let res = await api.get(key + query)
      // NOTE 'commit' triggers mutations
      commit("setMovies", res.data.results)
      commit("setActiveMovie", {})
    },

    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie)
    },



    async getCars() {
      let res = await sandbox.get('class/spells')
      console.log(res.data.data)
    }
  }
})
