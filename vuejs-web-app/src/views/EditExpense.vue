<template>
  <div class="container">
    <div class="panel-expense">
      <div class="form-group">
        Edit Expense
      </div>
      <form @submit.prevent="editExpense">
        <div 
          class="form-group"
        >
          <input
            v-model="expense.description"
            class="form-control"
            type="text"
            name="description"
            placeholder="Description"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <select
            v-model="expense.selectedProvider"
            class="form-control"
          >
            <option v-for="provider in providers"  
              :value="provider.id" 
              :key="provider.id"
            >
              {{ provider.name }}
            </option>
          </select>
        </div>
        <div 
          class="form-group"
        >
          <select 
            v-model="expense.selectedType"
            class="form-control"
          >
            <option v-for="type in expenseTypes" 
              :value="type.id" 
              :key="type.id"
            >
              {{ type.description }}
            </option>
          </select>
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="expense.dateToPay"
            class="form-control"
            type="text"
            name="dateToPay"
            placeholder="Date to pay"
            required
          >
        </div>
        <div
          class="form-group"
        >
          <input
            v-model="expense.paidIn"
            class="form-control"
            type="text"
            name="paidIn"
            placeholder="Paid in"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="expense.value"
            class="form-control"
            type="text"
            name="value"
            placeholder="Value"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="expense.status"
            class="form-control"
            type="text"
            name="status"
            placeholder="Status"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <button
            class="btn btn-secondary"
            type="submit"
          >
            <div v-if="loading" class="spinner"></div>
            <div v-else>
              SAVE
            </div>
          </button>
        </div>                                                        
      </form>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

      // Expenses:
      // Provider
      // description
      // expense type

      // partial expense:
      // date to pay
      // paid date
      // value

      // partial payment:
      // date to pay
      // paid date
      // value

export default {
  data () {
    return {
      loading: false,
      expense: {
        id: null,
        description: '',
        selectedProvider: null,
        selectedType: null,
        dateToPay: '',
        paidIn: '',
        value: '',
        status: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      providers: 'providers',
      expenseTypes: 'expenseTypes'
    })
  },
  created () {
    this.fetchProviders()
    this.fetchExpenseTypes()
  },
  mounted () {
    const { id } = this.$route.params
    const expenses = this.$store.getters.expense(parseInt(id))
    this.expense = expenses.length ? expenses[0] : null
  },
  methods: {
    fetchProviders () {
      this.loading = true
      this.$store.dispatch('fetchProviders')
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },    
    fetchExpenseTypes () {
      this.loading = true
      this.$store.dispatch('fetchExpenseTypes')
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },        
    editExpense () {
      console.log('provider', this.selectedProvider)
      console.log('type', this.selectedType)      
      this.loading = true
      this.$store.dispatch('updateExpense', {
        description: this.expense.description,
        provider_id: this.expense.selectedProvider,
        type_id: this.expense.selectedType,
        // date_to_pay: this.dateToPay,
        date_to_pay: new Date(),
        // paid_in: this.paidIn,
        paid_in: new Date(),
        value: this.expense.value,
        // status: this.status,
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

