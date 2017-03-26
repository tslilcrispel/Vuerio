<template>
  <div class="page">
    <grid></grid>
  </div>
</template>

<script>

  import Vue from "vue";
  import "../../node_modules/ag-grid/dist/styles/ag-grid.css"
  import "../../node_modules/ag-grid/dist/styles/theme-blue.css"

import Counter from 'components/Counter'
import Grid from 'components/Grid'

export default {
  components: {
    Counter,
    Grid
  }
}
</script>
