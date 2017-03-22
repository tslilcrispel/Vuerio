import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  count: 0,
  gridData: {}
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
