<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Expense Types
      </div>
      <div>
        <app-create-expense-type>
        </app-create-expense-type>
      </div>
    </div>
    <div class="table-x-scroll">
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
              <app-update-expense-type
                :expenseType="expenseType"
              ></app-update-expense-type>
            </td> 
            <td>            
              <app-delete-expense-type
                :expenseType="expenseType"
              ></app-delete-expense-type>
            </td>          
          </tr>
        </tbody>
      </table>  
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateExpenseType from '@/views/ExpenseType/CreateExpenseType'
import UpdateExpenseType from '@/views/ExpenseType/UpdateExpenseType'
import DeleteExpenseType from '@/views/ExpenseType/DeleteExpenseType'

export default {
  components: {
    'app-create-expense-type': CreateExpenseType,
    'app-update-expense-type': UpdateExpenseType,
    'app-delete-expense-type': DeleteExpenseType
  },
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
    fetchExpenseTypes () {
      this.loading = true
      this.$store.dispatch('fetchExpenseTypes')
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
    padding: 14px;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  .panel-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }
</style>