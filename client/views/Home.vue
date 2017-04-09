<template>
  <div class="page">
    <div class="hoder">
      <h2>מה לחפש?..</h2>
      <button class="btn btn-default" @click="addSelecter">הוסף תנאי חיפוש</button>
      <div class="select-container">
        <div v-for="select in getSelecters">
          <selecter v-bind:selectData='select'></selecter>
        </div>
      </div>
       <h2>איזה עומודות?..</h2>
        <rowselect></rowselect>
    </div>
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
import Rowselect from 'components/Rowselect'

export default {
  data () {
    return {

    }
  },
  components: {
    Grid,
    Selecter,
    Rowselect
  },
  computed: {
    getSelecters() {
      return this.$store.state.selecters
    },
  },
  methods: {
    addSelecter() {
      this.$store.commit('addSelecter')
    }
  }
}
</script>

<style>
  .hoder {
    /* border-bottom: 20px solid #f04242; */
    min-height: 120px;
    padding: 20px;
  }

  .select-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
