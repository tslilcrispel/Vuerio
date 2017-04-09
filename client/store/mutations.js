/**
 * Created by user on 3/22/2017.
 */

export default {
  getGridData(state, data) {
    state.gridData = data
  },
  createGridColumns(state, data) {
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
  },
  changeConnectFunction(state, params) {
    state.connectFunction = () => {
      store.dispatch('getGridData', params.value)
    }
  },
  addSelecter(state) {
    state.selecterNextID ++
    state.selecters.push({id: state.selecterNextID, option: '', value: ''})
  },
  removeSelecter(state, selectObj) {
    const indexOfObject = state.selecters.indexOf(selectObj)
    state.selecters.splice(indexOfObject, 1)
  }
}
