<template>
  <div class="page">
    <div class="hoder">
      <selecter></selecter>
      <selecter></selecter>
    </div>
    <img src="http://www.departika.com/wp-content/themes/departikaV2/img/red-notch.png" alt="" class="red_notch">
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
    border-bottom: 20px solid #f04242;
    min-height: 120px;
    padding: 20px;
  }

  .red_notch {
    left: 49%;
    position: absolute;
  }
</style>
