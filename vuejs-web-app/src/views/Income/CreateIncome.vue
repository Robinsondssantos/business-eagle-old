<template>
  <app-base-create-dialog>
    <template v-slot:title-button>
      Add income
    </template>    
    <template v-slot:title>
      Add income
    </template>
    <template v-slot:content>
      <form @submit.prevent="createIncome">
        <div 
          class="form-group"
        >
          <input
            v-model="description"
            class="form-control"
            type="text"
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
            placeholder="Receive in"
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
          <label for="status">Status</label>
          <select 
            id="status"
            name="status"
            v-model="status"
            class="form-control"
          >
            <option value="0">A receber</option>
            <option value="1">Recebido</option>
            <option value="2">Vencido</option>
          </select>
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
  </app-base-create-dialog>
</template>

<script>

import { mapGetters } from 'vuex'
import BaseCreateDialog from '@/components/Dialog/BaseCreateDialog'

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
    'app-base-create-dialog': BaseCreateDialog
  },
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
    this.fetchExpenseTypes()
  },
  methods: {  
    fetchCustomers () {
      this.loading = true
      this.$store.dispatch('fetchCustomers')
        .then(result => {
          console.log('result:', result)
          this.data = result
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
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
    createIncome () {
      console.log('customer', this.selectedCustomer)
      console.log('type', this.selectedType)      
      this.loading = true
      this.$store.dispatch('createIncome', {
        description: this.description,
        customer_id: this.selectedCustomer,
        type_id: this.selectedType,
        // date_to_pay: this.dateToReceive,
        date_to_pay: new Date(),
        // paid_in: this.receivedIn,
        paid_in: new Date(),
        value: this.value,
        status: this.status,
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

