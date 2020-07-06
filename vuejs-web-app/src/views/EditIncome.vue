<template>
  <div class="container">
    <div class="panel-income">
      <div class="form-group">
        Edit Income
      </div>
      <form @submit.prevent="editIncome">
        <div 
          class="form-group"
        >
          <input
            v-model="income.description"
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
            v-model="income.selectedCustomer"
            class="form-control"
          >
            <option v-for="customer in customers"
              :value="customer.id"
              :key="customer.id"
            >
              {{ customer.name }}
            </option>
          </select>
        </div>
        <div
          class="form-group"
        >
          <select
            v-model="income.selectedType"
            class="form-control"
          >
            <option v-for="type in incomeTypes" 
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
            v-model="income.dateToReceive"
            class="form-control"
            type="text"
            name="dateToReceive"
            placeholder="Date to receive"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="income.receivedIn"
            class="form-control"
            type="text"
            name="receivedIn"
            placeholder="Received in"
            required
          >
        </div>        
        <div 
          class="form-group"
        >
          <input
            v-model="income.value"
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
            v-model="income.status"
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

export default {
  data () {
    return {
      loading: false,
      income: {
        description: '',
        selectedCustomer: null,
        selectedType: null,
        dateToReceive: '',
        receivedIn: '',
        value: '',
        status: '',
      }
    }
  },
  computed: {
    ...mapGetters({
      customers: 'customers',
      incomeTypes: 'incomeTypes'
    })
  },
  created () {
    this.fetchCustomers()
    this.fetchIncomeTypes()
  },
  mounted () {
    const { id } = this.$route.params
    const incomes = this.$store.getters.income(parseInt(id))
    this.income = incomes.length ? incomes[0] : null
  },  
  methods: {
    fetchCustomers () {
      this.loading = true
      this.$store.dispatch('fetchCustomers')
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    fetchIncomeTypes () {
      this.loading = true
      this.$store.dispatch('fetchIncomeTypes')
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    editIncome () {
      this.loading = true
      this.$store.dispatch('editIncome', {
        id: this.income.id,
        description: this.income.description,
        customer_id: this.income.selectedCustomer,
        type_id: this.income.selectedType,
        // date_to_receive: this.dateToReceive,
        date_to_receive: new Date(),
        // received_in: this.receivedIn,
        received_in: new Date(),
        value: this.income.value,
        // status: this.status,
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>