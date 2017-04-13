<template>
  <div class="row-selection">
    <multiselect
      placeholder="בחר עמודות "
      :options="options"
      :searchable="true"
      selectLabel=""
      deselectLabel=""
      :multiple="true"
      :close-on-select="false"
      selectedLabel=""
    >
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'

  export default {
    components: {Multiselect},

    data() {
      return {
        selected: null,
        options: ['name', 'last_name', 'id', 'op', 'freeze', 'smoke']
      }
    }
  }
</script>

<style>
  .row-selection {
    margin-top: 20px;
    width: 50%;
  }

  .multiselect__tags {
    text-align: right;
  }
</style>
