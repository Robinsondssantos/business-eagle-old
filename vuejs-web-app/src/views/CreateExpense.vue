<template>
  <div class="container">
    <div class="panel-expense">
      <div class="form-group">
        Expense
      </div>
      <form @submit.prevent="createExpense">
        <div 
          class="form-group"
        >
          <input
            v-model="description"
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
            v-model="selectedProvider"
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
            v-model="selectedType"
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
            v-model="dateToPay"
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
            v-model="paidIn"
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
            v-model="value"
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
            v-model="status"
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
            SAVE
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
      description: '',
      selectedProvider: null,
      selectedType: null,
      dateToPay: '',
      paidIn: '',
      value: '',
      status: '',
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
    createExpense () {
      console.log('provider', this.selectedProvider)
      console.log('type', this.selectedType)      
      this.loading = true
      this.$store.dispatch('createExpense', {
        description: this.description,
        provider_id: this.selectedProvider,
        type_id: this.selectedType,
        // date_to_pay: this.dateToPay,
        date_to_pay: new Date(),
        // paid_in: this.paidIn,
        paid_in: new Date(),
        value: this.value,
        // status: this.status,
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

