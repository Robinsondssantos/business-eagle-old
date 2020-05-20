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
    height: 100%;
    width: 100%;    
  }

  body {
    background: #004cb2;
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
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

  .month-info {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #bbb;
    /* font-weight: bold; */
  }

  form {
    padding: 40px
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-control {
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    border: 1px solid #eee;
  }
  
  .btn {
    padding: 10px;
    height: 50px;
    border-radius: 2px;
    transition: opacity 0.2s;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn-block {
    width: 100%;
  }

  .btn-primary {
    /* background-color: #0747a6; */
    background-color: #07295a;
  }

</style>
