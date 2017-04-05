<template>
  <div id="app">
    <ul class="navigation">
      <li><img src="../images/logo.jpg" style="height: 65px; float: left; margin-left: 10px; margin-top: 5px;"/></li>
      <li class="router-link"><router-link to="/">Table</router-link></li>
      <li class="router-link"><router-link to="/">Add</router-link></li>
      <li class="router-link"><router-link to="/">Saved</router-link></li>
    </ul>
    <router-view></router-view>
    <footer id="footer">Zrif </footer>
  </div>
</template>

<style>
  body {
    margin: 0;
    background-color: #eee !important;
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

  .navigation {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    height: 75px;
  }

  .router-link {
    float: left;
  }

  .router-link a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: #545454;
  }

  .router-link a:hover {
    color: #f04242;
    border-bottom: 3px solid #f04242;
    box-shadow: inset 0 -3px 0 #f04242;
    text-decoration: none;
  }

  a {
    cursor: pointer;
  }

  #footer {
    float: left;
    height: 46px;
    padding: 5px;
    padding-top: 14px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: left;
    background-color: #fff;
  }
</style>
