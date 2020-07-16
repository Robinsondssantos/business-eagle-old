<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Incomes
      </div>
      <div>
        <app-create-income>          
        </app-create-income>
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
        <tr v-for="income in incomes" :key="income.id">
          <td v-for="key in columns" :key="key">
            {{ income[key] }}
          </td>
          <td>
            <app-update-income
              :income="income"
            ></app-update-income>
          </td>          
          <td>
            <app-delete-income
              :income="income"
            ></app-delete-income>            
          </td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateIncome from '@/views/Income/CreateIncome'
import UpdateIncome from '@/views/Income/UpdateIncome'
import DeleteIncome from '@/views/Income/DeleteIncome'

export default {
  components: {
    'app-create-income': CreateIncome,
    'app-update-income': UpdateIncome,
    'app-delete-income': DeleteIncome
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'description']
    }
  },
  computed: {
    ...mapGetters({
      incomes: 'incomes'
    })
  },  
  created () {
    this.fetchIncomes()
  },
  methods: {
    fetchIncomes () {
      this.loading = true
      this.$store.dispatch('fetchIncomes')
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
    padding: 8px;
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