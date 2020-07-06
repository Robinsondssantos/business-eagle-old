<template>
  <div class="container">
    <div class="panel-dashboard">
      <div class="form-group">
        Edit Income Type
      </div>          
      <form @submit.prevent="editIncomeType">    
        <div class="form-group">
          <input 
            v-model="incomeType.description"
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
      incomeType: {
        id: null,
        description: ''
      }
    }
  },
  created () {
    const { id } = this.$route.params
    const incomeTypes = this.$store.getters.incomeType(parseInt(id))
    this.incomeType = incomeTypes.length ? incomeTypes[0] : null
  },   
  methods: {
    editIncomeType () {
      this.loading = true
      this.$store.dispatch('updateIncomeType', {
        id: this.incomeType.id,
        description: this.incomeType.description
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