<template>
  <div class="page">
    <div class="hoder">
      <h2>מה לחפש?..</h2>
      <selecter></selecter>
      <selecter></selecter>
    </div>
    <h2>איזה עומודות?..</h2>
    <grid></grid>
  </div>
</template>

<script>

  import Vue from "vue";
  import "../../node_modules/ag-grid/dist/styles/ag-grid.css"
  import "../../node_modules/ag-grid/dist/styles/theme-bootstrap.css"
  import '../../node_modules/bootstrap/dist/css/bootstrap.css'

import Grid from 'components/Grid'
import Selecter from 'components/Selecter'

export default {
  components: {
    Grid,
    Selecter
  }
}
</script>

<style>
  .hoder {
    /* border-bottom: 20px solid #f04242; */
    min-height: 120px;
    padding: 20px;
  }
</style>
