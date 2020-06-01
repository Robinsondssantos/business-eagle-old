<template>
  <div class="container-signin">
    <div class="panel-signin">
      <span>{{ error }}</span>
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
            class="btn btn-primary btn-block btn-icon btn-signin" 
            type="submit" 
            style="margin-top: 22px; color: #ccc;"
          >
            <div v-if="loading" class="spinner"></div>
            <div v-else>
              ENTRAR
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return  {
      loading: false,
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      this.loading = true
      this.$store.dispatch('session', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          if (this.$route.query.redirect) {
            this.$router.push(this.$route.query.redirect)
          } else {
            this.$router.push('/')
          }
        })
        .catch(err => this.error = err)
        .finally(() => { this.loading = false })
    }
  } 
}
</script>

<style scoped>
  .container-signin {
    background: #004cb2;
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

  .btn-signin {
    height: 50px;    
  } 

</style>