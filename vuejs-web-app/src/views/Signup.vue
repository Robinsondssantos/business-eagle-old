<template>
  <div class="container-signin">
    <div class="panel-signin">
      <form @submit.prevent=createUser>
        <div class="form-group">
          <input 
            v-model="first_name"
            class="form-control" 
            type="text" 
            name="first_name" 
            placeholder="First name" 
            required
          >
        </div>
        <div class="form-group">
          <input class="form-control" 
            v-model="last_name"
            type="text" 
            name="last_name" 
            placeholder="Last name" 
            required
          >
        </div>
        <div class="form-group">
          <input
            v-model="phone"
            class="form-control" 
            type="text" 
            name="phone" 
            placeholder="Phone" 
            required
          >
        </div>                     
        <div class="form-group">
          <input 
            v-model="email"
            class="form-control" 
            type="email" 
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
            class="btn btn-primary btn-block btn-signup" 
            type="submit" 
            style="margin-top: 22px; color: #ccc;"
          >CREATE</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      password: ''
    }
  },
  methods: {
    createUser (e) {
      console.log(e.target.elements)

      this.$store.dispatch('createUser', {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
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

  .btn-signup {
    height: 50px;    
  } 
</style>