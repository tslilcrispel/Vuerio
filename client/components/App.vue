<template>
  <div id="app">
   <ul>
      <li><a>Home</a></li>
      <li><a>News</a></li>
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
               background-color: #eee;
}
.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
    height: 50px;
    box-shadow: 0px 3px 10px #aaa;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    color: #333;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    border-bottom: 3px solid #B91C8D ;
}
</style>
