<template>
  <div class="container">
    <div class="panel-customer">
      <div class="form-group">
        Edit Customer
      </div>
      <form @submit.prevent="editCustomer">
        <div 
          class="form-group"
        >
          <input
            v-model="customer.name"
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
      customer: {
        id: null,
        name: ''
      },
    }
  },
  created () {
    const { id } = this.$route.params
    const customers = this.$store.getters.customer(parseInt(id))
    this.customer = customers.length ? customers[0] : null
  },
  methods: {
    editCustomer () {
      this.loading = true
      this.$store.dispatch('updateCustomer', {
        id: this.customer.id,
        name: this.customer.name
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

