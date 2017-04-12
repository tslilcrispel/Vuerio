import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  gridData: [],
  gridColumns: [],
  contextMenu: [],
  connectFunction: () => {
    store.dispatch('getGridData', 'aba')
  },
  selecters: [
    {id: 0, option:'', value:[]}
  ],
  selecterNextID: 0
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
