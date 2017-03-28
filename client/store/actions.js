/**
 * Created by user on 3/22/2017.
 */

import request from 'axios'

export default {
  getGridData({ commit }, params) {
    console.log(params)
    const jsonData = require('./data.json');
    return request.get('/emptyUrl').then(response => {
      setTimeout(() => {
        commit('getGridData', jsonData)
        commit('createGridColumns', jsonData)
        console.log(jsonData)
      }, 500)
    })
  }
}
