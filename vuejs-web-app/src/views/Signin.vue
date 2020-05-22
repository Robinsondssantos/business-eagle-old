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
            class="btn btn-primary btn-block btn-icon" 
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
        .catch(err => console.log(err))
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

</style>