<template>
  <div class='page'>
    <div class='hoder'>
      <h2>מה לחפש?..</h2>
      <div class='select-container'>
        <div class='condition-holder' v-for='select in getSelecters'>
          <selecter v-bind:selectData='select'></selecter>
        </div>
      </div>
        <rowselect v-if='this.$store.state.selecters.length > 1'></rowselect>
    </div>
    <grid></grid>
  </div>
</template>

<script>

import Vue from "vue"
import '../../node_modules/ag-grid/dist/styles/ag-grid.css'
import '../../node_modules/ag-grid/dist/styles/theme-bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

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
    min-height: 120px;
    padding: 20px;
  }

  .select-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .card-shadow {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
</style>
