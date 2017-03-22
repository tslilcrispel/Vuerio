/**
 * Created by user on 3/22/2017.
 */

import request from 'axios'

// request.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

export default {
  getGridData({ commit }) {
    const jsonData = require('./data.json');
    return request.get('/asd').then(response => {
      commit('getGridData', jsonData);
      console.log(jsonData)
    })
  }
}
