<template>
  <div>
    <div class="container">
      <div class="painel-main">
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddProviderRoute"
          >
            Provider
          </button>
        </div>

        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddCustomerRoute"
          >
            Customer
          </button>
        </div>                   
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddExpenseRoute"
          >
            Expense
          </button>
        </div>      
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToAddIncomeRoute"
          >
            Income
          </button>
        </div>
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToExpenseTypeTableRoute"
          >
            Expense Types
          </button>
        </div>
        <div>
          <button
            class="btn btn-primary btn-main"
            @click="goToIncomeTypeTableRoute"
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
    goToAddProviderRoute () {
      this.$router.push('providers')
    },
    goToAddCustomerRoute () {
      this.$router.push('customers')
    },           
    goToAddExpenseRoute () {
      this.$router.push('expenses')
    },
    goToAddIncomeRoute () {
      this.$router.push('incomes')
    },
    goToExpenseTypeTableRoute () {
      this.$router.push('expense_type_table')
    },
    goToIncomeTypeTableRoute () {
      this.$router.push('income_type_table')
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
    background: #0056ce;;
  }

</style>