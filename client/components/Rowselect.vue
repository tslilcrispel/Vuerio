<template>
  <div>
    <v-select class="selecter"
              multiple
              :value.sync="selected"
              :options="options"
              placeholder="הכנס ערך"></v-select>
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
