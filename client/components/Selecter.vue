<template>
  <div class="col-sm-3">
    <span class="no-pad col-sm-4">
      <v-select class="selecter"
                :value.sync="selected"
                :options="options"
                placeholder="Entity"></v-select>
    </span>
    <span class="no-pad col-sm-8">
      <v-select class="selecter"
              multiple
              :value.sync="selected"
              :options="options2"
              placeholder="Value"></v-select>
    </span>
  </div>
</template>
<script>
  import vSelect from "vue-select"
  import VueQueryBuilder from 'vue-query-builder'

  export default {
    components: {vSelect, VueQueryBuilder},

    data() {
      return {
        selected: null,
        options: ['name', 'last_name', 'id', 'op', 'freeze', 'smoke'],
        options2: ['tazlil', 'crispel', '12', 'bamba', 'bisli', 'chips'],
        rules: [
          {
            type: "text",
            id: "first-name",
            label: "First Name",
          },
          {
            type: "text",
            id: "last-name",
            label: "Last Name",
          },
          {
            type: "radio",
            id: "plan-type",
            label: "Plan Type",
            choices: [
              {label: "Standard", value: "standard"},
              {label: "Premium", value: "premium"}
            ]
          }
        ]
      }
    },
    methods: {
      queryUpdated (query) {
        this.query = query;
      }
    },
    beforeMount() {

    }
  }
</script>

<style>
  .selecter {
    background-color: #fff;
  }

  .no-pad {
    padding: 0;
  }

  .v-select input[type=search], .form-control {
    width: 0 !important;
  }
</style>
