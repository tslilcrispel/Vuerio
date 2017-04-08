<template>
  <div id="app">
    <div class="navigation">
      <ul class="container-fluid">
        <li><router-link to="/"><img src="../images/logi.png" class="logo"/></router-link></li>
        <li class="router-link"><router-link to="/">חיפוש</router-link></li>
        <li class="router-link"><router-link to="/">הוספה</router-link></li>
        <li class="router-link"><router-link to="/">שמורים</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <footer id="footer">במבה </footer>
  </div>
</template>

<style>
  body {
    margin: 0;
    direction: rtl;
    background-color: #eceff4 !important;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    helvetica, 'helvetica neue',
    Ubuntu,
    'segoe ui', arial,
    sans-serif;
    /* background: url(http://www.departika.com/wp-content/themes/departikaV2/img/background.jpg) repeat; */
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
    margin: 0;
    overflow: hidden;
    width: 100%;
    height: 80px;
    background: #c0212f;
    border-bottom: solid 1px #c5d6de;
    padding: 20px 0 0 15px;
    z-index: 80;
  }

  .router-link {
    float: right;
  }

  .logo {
    float: right;
    height: 70px;
    position: relative;
    top: -15px;
    display: block;
    margin-left: 15px;
  }

  .router-link a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    color: #fdfce5;
    font-weight: bold
  }

  .router-link a:hover {
    color: #f04242;
    text-decoration: none;
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
</style>
