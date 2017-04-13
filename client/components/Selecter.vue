<template>
  <div class='flex m-l-md'>
    <a class='btn-remove-condition' @click='removeSelecter(selectData)' title="מחק"><icon name="times"></icon></a>
    <span class='no-pad'>
      <multiselect
            v-model="selectData.option"
            placeholder="בחר אופציה"
            :options="options"
            :searchable="true"
            selectLabel=""
            deselectLabel=""
            selectedLabel=""
          >
      </multiselect>
    </span>
    <span class='no-pad'>
      <multiselect
        v-model="selectData.value"
        v-if='selectData.option'
        placeholder="הכנס ערך"
        :options="options2"
        :searchable="true"
        selectLabel=""
        deselectLabel=""
        :multiple="true"
        :close-on-select="false"
        @input="addSelecter"
        selectedLabel=""
      >
      </multiselect>
    </span>
  </div>
</template>
<script>

  import Multiselect from 'vue-multiselect'
  import 'vue-awesome/icons/times'

  import Icon from 'vue-awesome/components/Icon.vue'

  export default {
    components: {
      Multiselect,
      Icon
    },
    data() {
      return {
        options: ['name', 'last_name', 'id', 'op', 'freeze', 'smoke'],
        options2: ['tazlil', 'crispel', '12', 'bamba', 'bisli', 'chips'],
        value: null
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

  .multiselect__element {
    text-align: right;
  }

  .multiselect__tags {
      padding: 8px 8px 0 40px;
  }

  .multiselect__select {
    left: 1px;
    right: auto;
  }

  .condition-holder:last-child .btn-remove-condition {
    visibility: hidden;
  }

  .v-select.searchable .dropdown-toggle {
    display: flex;
  }

  .m-l-md {
    margin-left: 15px ;
  }


  .btn-remove-condition {
    min-width: 20px;
    color: #e75645;
  }

</style>
