<template>
  <div class="container-signin">
    <div class="panel-signin">
      <form>
        <div class="form-group">
          <input class="form-control" type="text" name="email" placeholder="E-mail" required>
        </div>
        <div class="form-group">
          <input class="form-control" type="password" name="password" placeholder="Password" required>
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit" style="margin-top: 15px; color: #ccc;">Enter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .container-signin {
    padding-top: 180px;
    padding-left: 15px;
    padding-right: 15px;
    height: 100%;
  }

  .panel-signin {
    /* background-color: #fff; */
    margin: auto;
    text-align: center;
    max-width: 440px;
    border-radius: 8px;
  }
</style>