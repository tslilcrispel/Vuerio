/**
 * Created by user on 3/22/2017.
 */

export default {
  getGridData(state, data) {
    state.gridData = data
  },
  createGridColumns(state, data) {
    /*state.gridColumns = (Object.keys(data[0])).map(column => {
      return {
        headerName: column,
        field: column
      }
    })*/
    state.gridColumns.push(
      {
        headerName: "Athlete Details",
        children: (Object.keys(data[0])).map(column => {
          return {
            headerName: column,
            field: column
          }})
      }
    )
  },
  createContextMenu(state, params) {
    const contextMenu = ['copy','export', 'toolPanel', 'separator']
    contextMenu.push(
      {
        name: 'Bo - ' + params.value,
        shortcut: 'Alt + M',
        action: state.connectFunction
      }
    )
    state.contextMenu = contextMenu;
  }
}
