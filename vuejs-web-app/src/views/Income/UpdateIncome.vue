<template>
  <app-base-edit-dialog>
    <template v-slot:title-button>
      Edit
    </template>      
    <template v-slot:title>
      Edit income
    </template>
    <template v-slot:content>
      <form @submit.prevent="updateIncome">
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
            placeholder="Receive in"
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
    </template>
  </app-base-edit-dialog>
</template>

<script>

import { mapGetters } from 'vuex'
import BaseEditDialog from '@/components/Dialog/BaseEditDialog'

      // Incomes:
      // Customer
      // description
      // income type

      // partial income:
      // date to pay
      // paid date
      // value

      // partial payment:
      // date to pay
      // paid date
      // value

export default {
  components: {
    'app-base-edit-dialog': BaseEditDialog
  },
  props: {
    income: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false
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
    updateIncome () {
      console.log('customer', this.selectedCustomer)
      console.log('type', this.selectedType)      
      this.loading = true
      this.$store.dispatch('updateIncome', {
        id: this.income.id,
        description: this.income.description,
        customer_id: this.income.selectedCustomer,
        type_id: this.income.selectedType,
        // date_to_pay: this.dateToReceive,
        date_to_pay: new Date(),
        // paid_in: this.receivedIn,
        paid_in: new Date(),
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

