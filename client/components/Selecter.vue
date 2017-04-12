<template>
  <div class='flex m-l-md'>
    <span class='no-pad'>
      <v-select class='selecter'
                :options='options'
                placeholder='בחר אופציה'
                v-model='selectData.option'></v-select>
    </span>
    <span class='no-pad'>
      <v-select class="selecter"
                multiple
                :options='options2'
                v-if='selectData.option'
                v-model='selectData.value'
                :onChange='addSelecter'
                placeholder='הכנס ערך'></v-select>
    </span>
    <button class='btn btn-default btn-remove-condition' @click='removeSelecter(selectData)' >הסר</button>
  </div>
</template>
<script>
  import vSelect from "vue-select"

  export default {
    components: {vSelect},
    data() {
      return {
        options: ['name', 'last_name', 'id', 'op', 'freeze', 'smoke'],
        options2: ['tazlil', 'crispel', '12', 'bamba', 'bisli', 'chips']
      }
    },
    props: [
      'selectData'
    ],
    methods: {
      removeSelecter(selectObj) {
        this.$store.commit('removeSelecter', selectObj)
      },
      addSelecter(selectedDataArr) {
        if(selectedDataArr.length === 1 && this.addNewSelcterCondition) {
          this.$store.commit('addSelecter')
        }
      }
    },
    computed: {
      addNewSelcterCondition() {
        return this.$store.state.selecters.indexOf(this.selectData) === this.$store.state.selecters.length -1
      },
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

  .condition-holder:last-child .btn-remove-condition {
    display: none;
  }

  .v-select.searchable .dropdown-toggle {
    display: flex;
  }

  .m-l-md {
    margin-left: 15px ;
  }
</style>
