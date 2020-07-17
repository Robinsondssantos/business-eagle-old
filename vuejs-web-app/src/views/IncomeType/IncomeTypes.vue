<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Income Types
      </div>
      <div>
        <app-create-income-type>
        </app-create-income-type>
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
        <tr v-for="incomeType in incomeTypes" :key="incomeType.id">
          <td v-for="key in columns" :key="key">
            {{ incomeType[key] }}
          </td>
          <td>
            <app-update-income-type
              :incomeType="incomeType"
            ></app-update-income-type>
          </td> 
          <td>            
            <app-delete-income-type
              :incomeType="incomeType"
            ></app-delete-income-type>
          </td>          
        </tr>
      </tbody>
    </table>  
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateIncomeType from '@/views/IncomeType/CreateIncomeType'
import UpdateIncomeType from '@/views/IncomeType/UpdateIncomeType'
import DeleteIncomeType from '@/views/IncomeType/DeleteIncomeType'

export default {
  components: {
    'app-create-income-type': CreateIncomeType,
    'app-update-income-type': UpdateIncomeType,
    'app-delete-income-type': DeleteIncomeType
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'description']
    }
  },
  computed: {
    ...mapGetters({
      incomeTypes: 'incomeTypes'
    })
  },  
  created () {
    this.fetchIncomeTypes()
  },
  methods: {   
    fetchIncomeTypes () {
      this.loading = true
      this.$store.dispatch('fetchIncomeTypes')
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