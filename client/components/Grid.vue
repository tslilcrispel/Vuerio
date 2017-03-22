<template>
  <div class="gridWrapper">
    <ag-grid-vue style="width: 100%; height: 350px;" class="ag-fresh"
                 :gridOptions="gridOptions">
    </ag-grid-vue>
    <button @click="$store.dispatch('getGridData')">Get Data</button>
    <p>{{ gridData }}</p>
  </div>
</template>

<script>
  import Vue from "vue";
  import {AgGridVue} from "ag-grid-vue";

  export default {
    data () {
      return {
        gridOptions: null
      }
    },
    components: {
      'ag-grid-vue': AgGridVue
    },
    methods: {
      createRowData() {
        this.$store.dispatch('getGridData');
      },
      createColumnDefs() {
        return [
          {headerName: "index", field: "index", width: 150},
          {headerName: "עוד עברית",  field: "", width: 150},
          {headerName: "Bamba", field: "", width: 150}
        ];
      }
    },
    computed: {
      gridData() {
        return this.$store.getters.gridData;
      }
    },
    beforeMount() {
      this.createRowData
      console.log(this.gridData)
      this.gridOptions = {}
      this.gridOptions.rowData = this.gridData
      this.gridOptions.columnDefs = this.createColumnDefs()
    }
  }
</script>

<style>
  .gridWrapper {
    width: 450px;
    margin: auto;
    margin-top: 20px;
  }
</style>

