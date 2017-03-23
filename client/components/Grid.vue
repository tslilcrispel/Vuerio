<template>
  <div class="gridWrapper">
    <ag-grid-vue style="width: 100%; height: 350px;" class="ag-fresh"
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
      }
    },
    beforeMount() {
      this.gridOptions = {}
      this.gridOptions.enableColResize = true
      this.gridOptions.enableSorting =  true,
      this.gridOptions.enableFilter = true,
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

