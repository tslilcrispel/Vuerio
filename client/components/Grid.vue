<template>
  <div class="gridWrapper">
    <ag-grid-vue style="width: 100%; height: 500px;" class="ag-blue"
                 :gridOptions="gridOptions"
                 :rowData="gridData"
                 :columnDefs="gridColumns">
    </ag-grid-vue>
    <button @click="createRowData">Get Data</button>
    <div v-for="dataRow in gridColumns" style="display: none">
      <p>{{ dataRow }}</p>
    </div>
    <button @click="autoSizeAll">Auto Size Columns</button>
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
      autoSizeAll() {
        this.gridOptions.columnApi.autoSizeColumns(this.$store.getters.getColumnsIDs);
      },
      isActiveColumn(params) {
        let displayedColumns = params.columnApi.getDisplayNameForColumn(params.column)
        return displayedColumns === 'isActive'
      }
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
    width: 1000px;
    margin: auto;
    margin-top: 20px;
  }
</style>

