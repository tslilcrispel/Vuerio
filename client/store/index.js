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
  connectFunction: function({ dispatch }){
    dispatch('getGridData')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
