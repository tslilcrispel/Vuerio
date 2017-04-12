<template>
  <div class='page'>
    <div class='hoder'>
      <h2>מה לחפש?..</h2>
      <div class='select-container'>
        <div class='condition-holder' v-for='select in getSelecters'>
          <selecter v-bind:selectData='select'></selecter>
        </div>

        <div>
          <b-dropdown text="Dropdown Button sm" size="sm">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
        <rowselect v-if='this.$store.state.selecters.length > 1'></rowselect>
    </div>
    <grid></grid>
  </div>
</template>

<script>

import Vue from "vue"
import BootstrapVue from 'bootstrap-vue'
import "../../node_modules/ag-grid/dist/styles/ag-grid.css"
import "../../node_modules/ag-grid/dist/styles/theme-bootstrap.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Grid from 'components/Grid'
import Selecter from 'components/Selecter'
import Rowselect from 'components/Rowselect'

Vue.use(BootstrapVue);

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
  }
</style>
