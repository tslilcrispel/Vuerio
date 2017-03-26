<template>
  <div class="gridWrapper">
    <ag-grid-vue style="width: 100%; height: 500px;" class="ag-bootstrap"
                 :gridOptions="gridOptions"
                 :rowData="gridData"
                 :columnDefs="gridColumns">
    </ag-grid-vue>
    <button @click="createRowData">Get Data</button>
    <div v-for="dataRow in gridColumns" style="display: none">
      <p>{{ dataRow }}</p>
    </div>
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
        let displayedColumns = params.columnApi.getDisplayNameForColumn(params.column)
        return displayedColumns === 'isActive'
      },
      calculateRowCount() {
          let model = this.gridOptions.api.getModel()
          let totalRows = this.rowData.length
          let processedRows = model.getRowCount()
          this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString()
      },
    },
    beforeMount() {
      this.gridOptions = {
        defaultColDef: {
          width: 150,
          //headerCheckboxSelection: this.isActiveColumn,
          //checkboxSelection: this.isActiveColumn,
          editable: true
        },
        enableColResize: true,
        enableSorting:  true,
        enableFilter: true,
        rowSelection: 'multiple',
        showToolPanel: true,
        toolPanelSuppressRowGroups: true,
        toolPanelSuppressValues: true,
        toolPanelSuppressPivots: true,
        toolPanelSuppressPivotMode: true,
        suppressRowClickSelection: true,
        animateRows: true,
        groupUseEntireRow: true
      }
      this.createRowData()
    }
  }
</script>

<style>
  .gridWrapper {
    margin: auto;
    margin-top: 20px;
  }

  .ag-tool-panel {
    text-align: left;
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
    .ag-header-group-cell {
      border: 1px solid #ccc;
      border-bottom: none;
    }
  }

  .ag-body-viewport-wrapper {
    text-align: left;
  }

  .ag-header {
    background-color: #fff;
  }

  .ag-bootstrap .ag-ltr .ag-header-cell {
    border-right: 1px solid white;
  }
</style>

