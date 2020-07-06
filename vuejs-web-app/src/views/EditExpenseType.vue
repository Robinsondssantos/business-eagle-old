<template>
  <div class="container">
    <div class="panel-dashboard">
      <div class="form-group">
        Edit Expense Type
      </div>
      <form @submit.prevent="editExpenseType">
        <div class="form-group">
          <input 
            v-model="expenseType.description"
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
      expenseType: {
        id: null,
        description: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    const expenseTypes = this.$store.getters.expenseType(parseInt(id))
    this.expenseType = expenseTypes.length ? expenseTypes[0] : null
  },  
  methods: {
    editExpenseType () {
      this.loading = true
      this.$store.dispatch('updateExpenseType', {
        id: this.expenseType.id,
        description: this.expenseType.description
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