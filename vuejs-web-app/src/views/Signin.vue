<template>
  <div class="container-signin">
    <div class="panel-signin">
      <form @submit.prevent=signin>
        <div class="form-group">
          <input
            v-model="email" 
            class="form-control" 
            type="text" 
            name="email" 
            placeholder="E-mail" 
            required
        >
        </div>
        <div class="form-group">
          <input
            v-model="password" 
            class="form-control" 
            type="password" 
            name="password" 
            placeholder="Password" 
            required
          >
        </div>
        <div class="form-group">
          <button 
            class="btn btn-primary btn-block" 
            type="submit" 
            style="margin-top: 22px; color: #ccc;"
          >ENTER</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      this.$store.dispatch('session', {
        email: this.email,
        password: this.password
      })
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => {
          console.log('err:', err)
        })
        .finally(() => {})
    }
  } 
}
</script>

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