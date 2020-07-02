<template>
  <div>
    <div class="container">
      <div class="painel-main">
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToProviders"
          >
            Provider
          </button>
        </div>

        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToCustomers"
          >
            Customer
          </button>
        </div>                   
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToExpenses"
          >
            Expense
          </button>
        </div>      
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToIncomes"
          >
            Income
          </button>
        </div>
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToExpenseTypes"
          >
            Expense Types
          </button>
        </div>
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToIncomeTypes"
          >
            Income Types
          </button>
        </div>                            
        <div>
          <button
            class="btn btn-primary btn-main btn-main-secondary"
            @click="logOff"
          >
            Logoff
          </button>
        </div>
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    console.log('created - main')
  },
  methods: {
    goToProviders () {
      this.$router.push('providers')
    },
    goToCustomers () {
      this.$router.push('customers')
    },           
    goToExpenses () {
      this.$router.push('expenses')
    },
    goToIncomes () {
      this.$router.push('incomes')
    },
    goToExpenseTypes () {
      this.$router.push('expense_types')
    },
    goToIncomeTypes () {
      this.$router.push('income_types')
    },     
    logOff () {
      this.$store.dispatch('logOff')
        .then(() => this.$router.push('/signin'))
    }
  }
}
</script>

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

<style scoped>
  .painel-main {
    display: flex;
    flex-wrap: wrap;
  }

  .btn-main {
    margin: 5px;
    height: 40px;
    /* background: #004cb2; */
    font-weight: 600;
    color: #777;
    background: #ddd;
    border-radius: 5px;    
  }

  .btn-main-secondary {
    color: rgba(255, 255, 255, 0.90);
    background: #0056ce;
  }

</style>