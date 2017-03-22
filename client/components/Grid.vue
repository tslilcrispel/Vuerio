<template>
  <div class="gridWrapper">
    <ag-grid-vue style="width: 100%; height: 350px;" class="ag-fresh"
                 :gridOptions="gridOptions">
    </ag-grid-vue>
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
        return this.$store.state.gridData
      },
      createColumnDefs() {
        return [
          {headerName: "צליל", field: "row", width: 150},
          {headerName: "עוד עברית",  field: "name", width: 150},
          {headerName: "Bamba", field: "bamba", width: 150}
        ];
      }
    },
    beforeMount() {
      this.gridOptions = {};
      this.gridOptions.rowData = this.createRowData();
      this.gridOptions.columnDefs = this.createColumnDefs();
    }
  }
</script>

<style>
  .gridWrapper {
    width: 450px;
  }
</style>

