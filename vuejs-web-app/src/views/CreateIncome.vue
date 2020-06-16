<template>
  <div class="container">
    <div class="panel-income">
      <div class="form-group">
        Income
      </div>
      <form @submit.prevent="createIncome">
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
            v-model="selectedCustomer"
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
            v-model="selectedType"
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
            v-model="dateToReceive"
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
            v-model="receivedIn"
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

export default {
  data () {
    return {
      loading: false,
      description: '',
      selectedCustomer: null,
      selectedType: null,
      dateToReceive: '',
      receivedIn: '',
      value: '',
      status: '',
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
    createIncome () {
      this.loading = true
      this.$store.dispatch('createIncome', {
        description: this.description,
        customer_id: this.selectedCustomer,
        type_id: this.selectedType,
        // date_to_receive: this.dateToReceive,
        date_to_receive: new Date(),
        // received_in: this.receivedIn,
        received_in: new Date(),
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