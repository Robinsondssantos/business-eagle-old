<template>
  <div class="container">
    <div class="panel-customer">
      <div class="form-group">
        Customer
      </div>
      <form @submit.prevent="createCustomer">
        <div 
          class="form-group"
        >
          <input
            v-model="name"
            class="form-control"
            type="text"
            name="name"
            placeholder="Name"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <button
            class="btn btn-secondary"
            type="submit"
          >
            <div v-if="loading" class="spinner"></div>
            <div v-else>
              SAVE
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
    return {
      loading: false,
      name: '',
    }
  },
  methods: {
    createCustomer () {
      this.loading = true
      this.$store.dispatch('createCustomer', {
        name: this.name
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

