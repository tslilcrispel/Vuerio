<template>
  <div class="gridWrapper col-sm-12">
    <ag-grid-vue style="width: 100%; height: 500px;" class="ag-bootstrap"
                 :gridOptions="gridOptions"
                 :rowData="gridData"
                 :columnDefs="gridColumns"
                 :getMainMenuItems="getMainMenuItems">
    </ag-grid-vue>
    <button class="btn btn-info" @click="createRowData">Get Data</button>
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
        columnDefs: null,
        getMainMenuItems: null
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
      },
      getMainMenuItems() {
        let athleteMenuItems = params.defaultItems.slice(0);
        athleteMenuItems.push({
          name: 'ag-Grid Is Great', action: function() {console.log('ag-Grid is great was selected');}
        });
        athleteMenuItems.push({
          name: 'Casio Watch', action: function() {console.log('People who wear casio watches are cool');}
        });
        athleteMenuItems.push({
          name: 'Custom Sub Menu',
          subMenu: [
            {name: 'Black', action: function() {console.log('Black was pressed');} },
            {name: 'White', action: function() {console.log('White was pressed');} },
            {name: 'Grey', action: function() {console.log('Grey was pressed');} }
          ]
        });
        return athleteMenuItems;
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
        groupUseEntireRow: true,
        getMainMenuItems: this.getMainMenuItems
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
    .ag-header-group-cell {
      border: 1px solid #ccc;
      border-bottom: none;
    }
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

