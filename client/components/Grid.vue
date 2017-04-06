<template>
  <div class="gridWrapper col-sm-12">
    <ag-grid-vue style="width: 100%; height: 500px;" class="ag-bootstrap"
                 :gridOptions="gridOptions"
                 :rowData="gridData"
                 :columnDefs="gridColumns"
                 :getContextMenuItems="mainMenuItems">
    </ag-grid-vue>
    <button class="btn btn-info" @click="createRowData">שלוף מידע</button>
  </div>
</template>

<script>
  import Vue from "vue";
  import {AgGridVue} from "ag-grid-vue";
  import "ag-grid-enterprise/main";

  export default {
    data () {
      return {
        gridOptions: null,
        rowData: null,
        columnDefs: null
      }
    },
    components: {
      'ag-grid-vue': AgGridVue
    },
    computed: {
      gridData() {
        return this.$store.state.gridData
      },
      gridColumns() {
        return this.$store.state.gridColumns
      }
    },
    methods: {
      createRowData() {
        this.$store.dispatch('getGridData')
      },
      isActiveColumn(params) {
        const displayedColumns = params.columnApi.getDisplayNameForColumn(params.column)
        return displayedColumns === 'isActive'
      },
      calculateRowCount() {
        const model = this.gridOptions.api.getModel()
        const totalRows = this.rowData.length
        const processedRows = model.getRowCount()
        this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString()
      },
      mainMenuItems(params) {
        this.$store.commit('changeConnectFunction', params)
        this.$store.commit('createContextMenu', params)
        return this.$store.state.contextMenu
      }
    },
    beforeMount() {
      this.gridOptions = {
        defaultColDef: {
          width: 150,
          editable: true
        },
        enableColResize: true,
        enableSorting: true,
        rowSelection: 'multiple',
        showToolPanel: true,
        toolPanelSuppressRowGroups: true,
        toolPanelSuppressValues: true,
        toolPanelSuppressPivots: true,
        toolPanelSuppressPivotMode: true,
        suppressRowClickSelection: true,
        animateRows: true,
        groupUseEntireRow: true,
        suppressMenuColumnPanel: true,
        enableRtl: true
      }
      this.createRowData()
    }
  }
</script>

<style>
  .gridWrapper {
    margin: auto;
    margin-top: 40px;
  }

  .ag-column-select-panel {
    border-bottom: none;
  }

  .ag-header-cell {
    background-color: #f04242;
    color: #fff;
  }

  .ag-header-row {
    background-color: #fff;
  }

  .ag-header-group-cell {
    border: 1px solid #ccc;
    border-bottom: none;
  }

  .ag-header {
    background-color: #fff;
  }

  .ag-bootstrap .ag-ltr .ag-header-cell {
    border-right: 1px solid white;
  }

  .ag-bootstrap .ag-tool-panel {
    background: rgba(177, 179, 178, 0.35);
  }
</style>

