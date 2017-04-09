<template>
  <div class="flex m-l-md">
    <button class="btn btn-default order-2" @click="removeSelecter(selectData)">הסר</button>
    <span class="no-pad order-0">
      <v-select class="selecter"
                :value.sync="selected"
                :options="options"
                placeholder="בחר אופציה"
                v-model="selectData.option"></v-select>
    </span>
    <span class="no-pad">
      <v-select class="selecter order-1"
                multiple
                :value.sync="selected"
                :options="options2"
                v-if="selectData.option"
                v-model="selectData.value"
                placeholder="הכנס ערך"></v-select>
    </span>
  </div>
</template>
<script>
  import vSelect from "vue-select"

  export default {
    components: {vSelect},

    data() {
      return {
        selected: null,
        options: ['name', 'last_name', 'id', 'op', 'freeze', 'smoke'],
        options2: ['tazlil', 'crispel', '12', 'bamba', 'bisli', 'chips']
      }
    },
    props: ['selectData'],
    methods: {
      removeSelecter(selectObj) {
        this.$store.commit('removeSelecter', selectObj)
      }
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

  .order-0 {
    order: 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .v-select.searchable .dropdown-toggle {
    display: flex;
  }

  .m-l-md {
    margin-left: 15px ;
  }

  /*.v-select input[type=search], .form-control {
    width: 0 !important;
  }*/
</style>
