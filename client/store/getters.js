/**
 * Created by user on 3/22/2017.
 */

export default {
  getColumnsIDs(state) {
    return state.gridColumns.map(columnDef => {
      return columnDef.field
    })
  }
}
