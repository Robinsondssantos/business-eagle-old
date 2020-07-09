<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Expense Types
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="openDialogMethod()"
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
    <create-expense-type-modal-app
      :dialog="createExpenseTypeDialog"
      :closeDialogMethod="closeDialogMethod"
    ></create-expense-type-modal-app>    
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateExpenseTypeModal from './CreateExpenseTypeModal'

export default {
  components: {
    'create-expense-type-modal-app': CreateExpenseTypeModal
  },  
  data () {
    return {
      loading: false,
      columns: ['id', 'description'],
      createExpenseTypeDialog: false
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
    openDialogMethod () {
      this.createExpenseTypeDialog = true
    },
    closeDialogMethod () {
      this.createExpenseTypeDialog = false 
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
    padding: 8px;
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