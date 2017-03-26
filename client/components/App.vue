<template>
  <div id="app">
    <ul class="navigation">
      <li><router-link to="/">Table</router-link></li>
      <li><router-link to="/">Add</router-link></li>
      <li><router-link to="/">Saved</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
  body {
    margin: 0;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont,
    'avenir next', avenir,
    helvetica, 'helvetica neue',
    Ubuntu,
    'segoe ui', arial,
    sans-serif;
    background: url(http://www.departika.com/wp-content/themes/departikaV2/img/background.jpg) repeat;
  }

  .page {
    text-align: center;
  }
  /* nesting for the need to test postcss */
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
    height: 48px;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: #545454;
    /*font-weight: bold;*/
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    color: #f04242;
    border-bottom: 3px solid #f04242
  }

  a {
    cursor: pointer;
  }
</style>
