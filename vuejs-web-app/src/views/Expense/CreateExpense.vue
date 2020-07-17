<template>
  <app-base-create-dialog>
    <template v-slot:title-button>
      Add expense
    </template>    
    <template v-slot:title>
      Add expense
    </template>
    <template v-slot:content>
      <form @submit.prevent="createExpense">
        <div 
          class="form-group"
        >
          <label for="description">Description</label>
          <input
            id="description"
            v-model="description"
            class="form-control"
            type="text"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <label for="provider">Provider</label>
          <select
            id="provider"
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
          <label for="type">Type</label>
          <select
            id="type" 
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
          <label for="dateToPay">Date to pay</label>
          <input
            id="dateToPay"
            v-model="dateToPay"
            class="form-control"
            type="text"
            name="dateToPay"
            required
          >
        </div>
        <div
          class="form-group"
        >
          <label for="paidIn">Paid in</label>
          <input
            id="paidIn"
            v-model="paidIn"
            class="form-control"
            type="text"
            name="paidIn"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <label for="value">Value</label>
          <input
            id="value"
            v-model="value"
            class="form-control"
            type="text"
            name="value"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <label for="status">Status</label>
          <select
            id="status"
            v-model="status"
            class="form-control"
          >
            <option value="a-pagar">A pagar</option>
            <option value="paga">Paga</option>
            <option value="vencida">Vencida</option>
            <!-- <option v-for="situation in situations"
              :value="situation.id"
              :key="situation.id"
            >
              {{ situation.description }}
            </option> -->
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
  components: {
    'app-base-create-dialog': BaseCreateDialog
  },
  data () {
    return {
      loading: false,
      description: '',
      selectedProvider: null,
      selectedType: null,
      dateToPay: '',
      paidIn: '',
      value: '',
      status: ''
      // selectedSituation: null
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

