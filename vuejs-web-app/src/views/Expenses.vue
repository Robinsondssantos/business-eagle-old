<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Expenses
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="goToAddExpenseRoute"
        >
          Add Expense
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      columns: ['id', 'description'],
      data: [],
    }
  },
  created () {
    this.fetchExpenses()
  },
  methods: {
    goToAddExpenseRoute () {
      this.$router.push('expenses')
    },
    fetchExpenses () {
      this.loading = true
      this.$store.dispatch('fetchExpenses')
        .then(result => {
          console.log('result:', result)
          this.data = result
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    }
  }
}
</script>

<style scoped>

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .panel-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }

</style>