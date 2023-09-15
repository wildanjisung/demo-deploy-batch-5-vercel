import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    angka: 15,
    warna: 'pink',
    list: []
  },
  mutations: {
    setAngka(state, param) {
      state.angka = param;
    },
    setList(state, param) {
      state.list = param;
    }
  },
  actions: {
    fetchList(store) {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0", {
        params: {
          limit: 5,
          offset: store.state.list.length
        },
      })
      .then((response) => {
        store.commit("setList", [
          ...store.state.list,
          ...response.data.results
        ]);
      })
      .catch((error) => {
        console.log('error:', error)
        alert("maaf terjadi kesalahan, silahkan coba sekali lagi")
        // send to log error
      })
      ;
    }
  }
})
