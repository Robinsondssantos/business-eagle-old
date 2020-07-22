<template>
  <div>
    <button
      @click="dialog = true"
    >
      Edit      
    </button>
    <div class="modal" v-if="dialog">
      <div class="modal-content">
        <div class="modal-content-title">
          <div>
            Edit provider
          </div>     
          <button
            class="btn-close"
            @click="dialog = false"
          >x</button>
        </div>
        <form @submit.prevent="updateExpense">
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
            <label for="provider">Provider</label>
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
            <label for="type">Type</label>
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
            <label for="dateToPay">Date to pay</label>
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
            <label for="paidIn">Paid in</label>
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
            <label for="value">Value</label>
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
              v-model="selectedStatus"
              class="form-control"
            >
              <option value="0">A pagar</option>
              <option value="1">Paga</option>
              <option value="2">Vencida</option>
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
      </div>
    </div>
  </div>
</template>

<script>

//TODO https://stackoverflow.com/questions/41112733/whats-the-proper-way-to-implement-formatting-on-v-model-in-vue-js-2-0
//TODO https://www.w3schools.com/howto/howto_custom_select.asp

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
  props: {
    expense: {
      type: Object,
      required: true
    }
  },
  filters: {
    date (v) {
      return new Date(v).toLocaleDateString('pt-br')
    },
    money (v) {
      return Number(v).toLocaleString('pt-br', { 
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      })
    },
    formatExpenseStatus (v) {
      if (v === 0) {
        return 'A pagar'
      } else if (v === 1) {
        return 'Paga'
      } else if (v === 2) {
        return 'Vencida'
      }
      return v
    }
  },  
  data () {
    return {
      dialog: false,
      loading: false,
      description: '',
      selectedProvider: null,
      selectedType: null,
      dateToPay: '',
      paidIn: '',
      value: '',
      selectedStatus: ''      
    }
  },
  computed: {
    ...mapGetters({
      providers: 'providers',
      expenseTypes: 'expenseTypes'
    })
  },
  watch: {
    dialog (v) {
      if (v) {
        this.description = this.expense.description
        this.selectedProvider = this.expense.provider_id
        this.selectedType = this.expense.type_id
        this.dateToPay = this.expense.date_to_pay
        this.paidIn = this.expense.paid_in
        this.value = this.expense.value
        this.selectedStatus = this.expense.status
      }
    }
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
    updateExpense () {
      console.log('provider', this.selectedProvider)
      console.log('type', this.selectedType)      
      this.loading = true
      this.$store.dispatch('updateExpense', {
        id: this.expense.id,
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

<style scoped>

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    border-radius: 4px;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }

  .modal-content-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .btn-close {
    background-color: #d5d5d5;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .btn-close:hover,
  .btn-close:focus {
    background-color: #bbbbbb;
  }

</style>