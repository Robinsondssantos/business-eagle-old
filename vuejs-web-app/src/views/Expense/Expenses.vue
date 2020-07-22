<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Expenses
      </div>
      <div class="btn-actions">
        <!-- <app-create-expense>          
        </app-create-expense> -->
        <app-create-expense>          
        </app-create-expense>
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
          <td>{{ expense.id }}</td>
          <td>{{ expense.description }}</td>
          <td>{{ expense.status }}</td>
          <td>{{ expense.date_to_pay | date }}</td>
          <td>{{ expense.paid_in | date }}</td>
          <td>{{ expense.value | money }}</td>
          <!-- <td>{{ expense.createdAt }}</td> -->
          <!-- <td v-for="key in columns" :key="key">
            <div>
              {{ expense.createdAt }}
            </div>
            <div>
              {{ expense[key] }}
            </div>
          </td> -->
          <td>
            <app-update-expense
              :expense="expense"
            ></app-update-expense>
          </td>          
          <td>
            <app-delete-expense
              :expense="expense"
            ></app-delete-expense>            
          </td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateExpense from '@/views/Expense/CreateExpense'
import UpdateExpense from '@/views/Expense/UpdateExpense'
import DeleteExpense from '@/views/Expense/DeleteExpense'

export default {
  components: {
    'app-create-expense': CreateExpense,
    'app-update-expense': UpdateExpense,
    'app-delete-expense': DeleteExpense
  },
  filters: {
    date (v) {
      return new Date(v).toLocaleDateString('pt-br')
    },
    money (v) {
      return Number(v).toLocaleString('pt-br', { 
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      })
    }
  },
  data () {
    return {
      loading: false,
      columns: [
        'id', 
        'description',
        'status', 
        'date_to_pay', 
        'paid_in',
        'value'
      ]
    }
  },
  computed: {
    ...mapGetters({
      expenses: 'expenses'
    })
  },
  watch: {
    expenses (v) {
      console.log('v:', v)
    }
  },
  created () {
    this.fetchExpenses()
  },
  methods: {
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
    padding: 10px;
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

  /* .btn-actions {
    display: flex;
  } */

</style>