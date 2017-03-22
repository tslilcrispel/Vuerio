import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
  count: 0,
  gridData: [
    {"row": "Row 1", "name": "Michael Phelps" ,"bamba":"baba"},
    {"row": "Row 2", "name": "Natalie Coughlin"},
    {"row": "Row 3", "name": "Aleksey Nemov"},
    {"row": "Row 4", "name": "Alicia Coutts"},
    {"row": "Row 5", "name": "Missy Franklin"},
    {"row": "Row 6", "name": "Ryan Lochte"},
    {"row": "Row 7", "name": "Allison Schmitt"},
    {"row": "Row 8", "name": "Natalie Coughlin"},
    {"row": "Row 9", "name": "Ian Thorpe"},
    {"row": "Row 10", "name": "Bob Mill"},
    {"row": "Row 11", "name": "Willy Walsh"},
    {"row": "Row 12", "name": "Sarah McCoy"},
    {"row": "Row 13", "name": "Jane Jack"},
    {"row": "Row 14", "name": "Tina Wills"}
  ]
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
