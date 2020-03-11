<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  html, body, #app {
    min-height: 100%;
  }

  body {
    background: #0747a6;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 760px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
  }

  @media only screen and (max-width: 600px) {
    .container {
      margin: 80px 20px;
    }
  }

</style>
