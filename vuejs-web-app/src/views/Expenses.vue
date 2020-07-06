<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Expenses
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="goToCreateExpense"
        >
          Add Expense
        </button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
          </th>
          <th>
          </th>
          <th>            
          </th>                    
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.id">
          <td v-for="key in columns" :key="key">
            {{ expense[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="goToEditExpenseRoute(expense.id)"
            >
              EDIT
            </button>
          </td>          
          <td>
            <button
              class="btn"
              @click="deleteExpense(expense.id)"
            >
              REMOVE
            </button>
          </td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      columns: ['id', 'description']
    }
  },
  computed: {
    ...mapGetters({
      expenses: 'expenses'
    })
  },  
  created () {
    this.fetchExpenses()
  },
  methods: {
    goToCreateExpense () {
      this.$router.push('create_expense')
    },
    goToEditExpenseRoute (expenseId) {
      this.$router.push(`expenses/${expenseId}`)
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
    },
    deleteExpense (expenseId) {
      this.loading = true
      this.$store.dispatch('deleteExpense', expenseId)
        .then(result => {
          console.log('result:', result)
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