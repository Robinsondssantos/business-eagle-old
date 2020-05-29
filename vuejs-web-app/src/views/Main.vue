<template>
  <div>
    <div class="container">
      <div class="painel-main">
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddProvidersAndCustomersRoute"
          >
            Add Provider/Customer
          </button>
        </div>        
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddExpenseRoute"
          >
            Add Expense
          </button>
        </div>
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddExpenseTypeRoute"
          >
            Add Expense Type
          </button>
        </div>        
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddIncomeRoute"
          >
            Add Income
          </button>
        </div>
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddIncomeTypeRoute"
          >
            Add Income Type
          </button>
        </div>                  
        <div>
          <button
            class="btn btn-primary btn-main"
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
    goToAddProvidersAndCustomersRoute () {
      this.$router.push('providersAndCustomers')
    },    
    goToAddExpenseRoute () {
      this.$router.push('expenses')
    },
    goToAddIncomeRoute () {
      this.$router.push('incomes')
    },
    goToAddExpenseTypeRoute () {
      this.$router.push('expense_types')
    },
    goToAddIncomeTypeRoute () {
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

</style>