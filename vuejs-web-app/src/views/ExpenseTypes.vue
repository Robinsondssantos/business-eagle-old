<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Expense Types
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="goToCreateExpenseType"
        >
          Add Expense Type
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
        <tr v-for="expenseType in expenseTypes" :key="expenseType.id">
          <td v-for="key in columns" :key="key">
            {{ expenseType[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="goToEditExpenseTypeRoute(expenseType.id)"
            >
              EDIT
            </button>
          </td> 
          <td>            
            <button
              class="btn"
              @click="deleteExpenseType(expenseType.id)"
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
      expenseTypes: 'expenseTypes'
    })
  },  
  created () {
    this.fetchExpenseTypes()
  },
  methods: {
    goToCreateExpenseType () {
      this.$router.push('create_expense_type')
    },
    goToEditExpenseTypeRoute (expenseTypeId) {
      this.$router.push(`expense_types/${expenseTypeId}`)
    },    
    fetchExpenseTypes () {
      this.loading = true
      this.$store.dispatch('fetchExpenseTypes')
        .then(result => {
          console.log('result:', result)
          this.data = result
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    deleteExpenseType (expenseTypeId) {
      this.loading = true
      this.$store.dispatch('deleteExpenseType', expenseTypeId)
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