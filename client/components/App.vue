<template>
  <div id='app'>
    <div class='navigation'>
      <ul class='container-fluid'>
        <li><router-link to="/"><img src="../images/logo.jpg" class='logo'/></router-link></li>
        <li class='router-link'><router-link to="/"><icon name="search" style="margin-left: 10px"></icon>חיפוש</router-link></li>
        <li class='router-link'><router-link to="/"><icon name="plus" style="margin-left: 10px"></icon>הוספה</router-link></li>
        <li class='router-link'><router-link to="/"><icon name="floppy-o" style="margin-left: 10px"></icon>שמורים</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  //
  import 'vue-awesome/icons/search'
  import 'vue-awesome/icons/plus'
  import 'vue-awesome/icons/floppy-o'

  import Icon from 'vue-awesome/components/Icon.vue'
  export default {
    components: {
      Icon
    }
  }
</script>

<style>
  body {
    margin: 0;
    direction: rtl;
    background-color: #eee !important;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    helvetica, 'helvetica neue',
    Ubuntu,
    'segoe ui', arial,
    sans-serif;
  }

  .fa-icon {
    width: auto;
    height: 11px;
  }

  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }

  .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    list-style-type: none;
  }
  .navigation {
    background: #fff;
    border: none;
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.5);
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
    color: #9499af;
    font-size: 0.9em;
    font-weight: 600;
    margin: 0;
    min-height: 70px;
    padding: 0 50px 0px 50px;
  }

  .router-link {
    float: right;
    display: flex;
    align-items: center;
  }

  .logo {
    float: right;
    height: 50px;
    top: 10px;
    position: relative;
    display: block;
    margin-left: 15px;
  }

  .router-link a {
    color: #9499af;
    line-height: 60px;
    padding: 0 0.9em;
    font-weight: bold;
    margin: 5px 0 0 0;
    background: none;
    font-size: 15px;
  }

  .router-link a:hover {
    text-decoration: none;
    color: #281c4c;
    border-bottom: 5px solid #f03512;
  }

  .router-link a:active {
    text-decoration: none;
    color: #281c4c;
    border-bottom: 5px solid #f03512;
  }

  a {
    cursor: pointer;
  }

  #footer {
    float: right;
    height: 46px;
    padding: 5px;
    padding-top: 14px;
    width: 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    text-align: right;
    background-color: #fff;
  }

  .flex {
    display: flex;
    align-items: center;
  }

</style>
