<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Customers
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="openDialogMethod()"
        >
          Add Customer
        </button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
          </th>
          <th>            
          </th>
          <th>            
          </th>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td v-for="key in columns" :key="key">
            {{ customer[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="goToEditCustomerRoute(customer.id)"
            >
              EDIT
            </button>
          </td>          
          <td>
            <button
              class="btn"
              @click="deleteCustomer(customer.id)"
            >
              REMOVE
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <create-customer-app
      :dialog="createCustomerDialog"
      :closeDialogMethod="closeDialogMethod"
    ></create-customer-app>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateCustomer from './CreateCustomer'

export default {
  components: {
    'create-customer-app': CreateCustomer
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'name'],
      createCustomerDialog: false
    }
  },
  computed: {
    ...mapGetters({
      customers: 'customers'
    })
  },  
  created () {
    this.fetchCustomers()
  },
  methods: {
    openDialogMethod () {
      this.createCustomerDialog = true
    },
    closeDialogMethod () {
      this.createCustomerDialog = false
    },
    goToEditCustomerRoute (customerId) {
      this.$router.push(`customers/${customerId}`)
    },
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
    deleteCustomer (customerId) {
      this.loading = true
      this.$store.dispatch('deleteCustomer', customerId)
        .then(result => {
          console.log('result:', result)
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    }    
  }
}
</script>

<style scoped>

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  .panel-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }

</style>