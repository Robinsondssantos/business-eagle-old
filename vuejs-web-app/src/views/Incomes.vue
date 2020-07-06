<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Incomes
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="goToCreateIncome"
        >
          Add Income
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
        <tr v-for="income in incomes" :key="income.id">
          <td v-for="key in columns" :key="key">
            {{ income[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="goToEditIncomeRoute(income.id)"
            >
              EDIT
            </button>
          </td>          
          <td>
            <button
              class="btn"
              @click="deleteIncome(income.id)"
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
      incomes: 'incomes'
    })
  },  
  created () {
    this.fetchIncomes()
  },
  methods: {
    goToCreateIncome () {
      this.$router.push('create_income')
    },
    goToEditIncomeRoute (expenseId) {
      this.$router.push(`expenses/${expenseId}`)
    },    
    fetchIncomes () {
      this.loading = true
      this.$store.dispatch('fetchIncomes')
        .then(result => {
          console.log('result:', result)
          this.data = result
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    deleteIncome (incomeId) {
      this.loading = true
      this.$store.dispatch('deleteIncome', incomeId)
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