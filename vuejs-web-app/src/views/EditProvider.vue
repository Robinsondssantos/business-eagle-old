<template>
  <div class="container">
    <div class="panel-provider">
      <div class="form-group">
        Edit Provider
      </div>
      <form @submit.prevent="editProvider">
        <div
          class="form-group"
        >
          <input
            v-model="provider.name"
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
      provider : {
        id: null,
        name: ''
      },
    }
  },
  created () {
    console.log('created')
    const { id } = this.$route.params
    console.log('providerId:', id)
    const providers = this.$store.getters.provider(parseInt(id)) 
    this.provider = providers.length ? providers[0] : null
    console.log(this.provider)
  },
  methods: {
    editProvider () {
      this.loading = true
      this.$store.dispatch('updateProvider', {
        id: this.provider.id,
        name: this.provider.name
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>