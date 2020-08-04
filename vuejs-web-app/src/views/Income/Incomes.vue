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
          <tr v-for="income in incomes" :key="income.id">
            <td>{{ income.id }}</td>
            <td>{{ income.description }}</td>
            <td>{{ income.status | formatIncomeStatus }}</td>
            <td>{{ income.date_to_receive | date }}</td>
            <td>{{ income.received_in | date }}</td>
            <td>{{ income.value | money }}</td>
            <!-- <td v-for="key in columns" :key="key">
              {{ income[key] }}
            </td> -->
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
  filters: {
    date (v) {
      return new Date(v).toLocaleDateString('pt-br')
    },
    money (v) {
      return Number(v).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
        minimumIntegerDigits: 2
      })
    },
    formatIncomeStatus (v) {
      if (v === 0) {
        return 'A receber'
      } else if (v === 1) {
        return 'Recebido'
      } else if (v ===  2) {
        return 'Vencido'
      }
      return v
    }
  },
  data () {
    return {
      loading: false,
      columns: [
        'id', 
        'description',
        'status',
        'date_to_receive',
        'received_in',
        'value'
      ]
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
    padding: 14px;
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

  .table-x-scroll {
    overflow-x: auto;
  }

</style>