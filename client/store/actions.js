/**
 * Created by user on 3/22/2017.
 */

export default {
  incrementAsync({commit}) {
  setTimeout(() => {
    commit('INCREMENT')
  }, 200)
}
}
