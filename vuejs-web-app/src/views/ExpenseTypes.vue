<template>
  <div class="container">
    <div class="panel-dashboard">
      <div class="form-group">
        Expense Type
      </div>
      <form @submit.prevent="createExpenseType">
        <div class="form-group">
          <input 
            v-model="description"
            class="form-control"
            type="text" 
            name="description" 
            placeholder="Description"
            required
          >
        </div>
        <div class="form-group">
          <button 
            class="btn btn-secondary btn-icon" 
            type="submit" 
            style="margin-top: 22px; color: #ccc;"
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
      description: ''
    }
  },
  methods: {
    createExpenseType () {
      this.loading = true
      this.$store.dispatch('createExpenseType', {
        description: this.description
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

<style scoped>

</style>