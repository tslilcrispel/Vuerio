/**
 * Created by user on 3/22/2017.
 */

export default {
  getGridData(state, data) {
    state.gridData = data
  },
  createGridColumns(state, data) {
    state.gridColumns = (Object.keys(data[0])).map(column => {
      return {
        headerName: column,
        field: column
      }
    })
  }
}
