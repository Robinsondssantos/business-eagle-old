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
    /* background: #ebf5ff; */
    /* background: #004cb2;     */
    background: #fefeff;    
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
    margin: 60px auto;
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
    padding: 10px
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
    /* height: 50px; */
    border-radius: 3px;
    transition: opacity 0.2s;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  .btn:hover {
    opacity: 0.8;
  }

  .btn-block {
    width: 100%;
  }

  .btn-primary {
    color: rgba(255, 255, 255, 0.90);
    background-color: #07295a;
  }

  .btn-secondary {
    color: rgba(255, 255, 255, 0.90);
    background-color: #0056ce;
  }

  .spinner {
    height: 2rem;
    width: 2rem;
    border: solid .14em rgba(255, 255, 255, 0.65);
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border .75s linear infinite;
  }  

  @keyframes spinner-border {
    to { transform: rotate(360deg); }
  }

  .btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-x-scroll {
    overflow-x: auto;
  }    

</style>
