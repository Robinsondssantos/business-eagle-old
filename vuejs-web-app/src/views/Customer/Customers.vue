<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Customers
      </div>
      <div>
        <app-create-customer-dialog>          
        </app-create-customer-dialog>
      </div>
    </div>
    <div class="table-x-scroll">
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
              <app-update-customer-dialog
                :customer="customer"
              ></app-update-customer-dialog>
            </td>          
            <td>
              <app-delete-customer-dialog
                :customer="customer"
              ></app-delete-customer-dialog>              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateCustomerDialog from '@/views/Customer/CreateCustomerDialog'
import UpdateCustomerDialog from '@/views/Customer/UpdateCustomerDialog'
import DeleteCustomerDialog from '@/views/Customer/DeleteCustomerDialog'

export default {
  components: {
    'app-create-customer-dialog': CreateCustomerDialog,
    'app-update-customer-dialog': UpdateCustomerDialog,
    'app-delete-customer-dialog': DeleteCustomerDialog
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'name']
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
    fetchCustomers () {
      this.loading = true
      this.$store.dispatch('fetchCustomers')
        .then(result => {
          console.log('result:', result)
          this.data = result
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
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  .panel-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
  }

</style>