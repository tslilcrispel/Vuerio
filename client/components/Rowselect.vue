<template>
  <div class="row-selection">
    <v-select class="selecter"
              multiple
              :value.sync="selected"
              :options="options"
              placeholder="בחר עמודות לשליפה..."></v-select>
  </div>
</template>

<script>
  import vSelect from "vue-select"

  export default {
    components: {vSelect},

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
</style>
