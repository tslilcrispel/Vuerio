<template>
  <div class="page">
    <selecter></selecter>
    <grid></grid>
  </div>
</template>

<script>

  import Vue from "vue";
  import "../../node_modules/ag-grid/dist/styles/ag-grid.css"
  import "../../node_modules/ag-grid/dist/styles/theme-bootstrap.css"

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
  .page {
    padding: 5%;
  }
</style>
