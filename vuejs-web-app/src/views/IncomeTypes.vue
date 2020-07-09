<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Income Types
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="openDialogMethod()"
        >
          Add Income Type
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
        <tr v-for="incomeType in incomeTypes" :key="incomeType.id">
          <td v-for="key in columns" :key="key">
            {{ incomeType[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="goToEditIncomeTypeRoute(incomeType.id)"
            >
              EDIT
            </button>
          </td>          
          <td>
            <button
              class="btn"
              @click="deleteIncomeType(incomeType.id)"
            >
              REMOVE
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <create-income-type-modal-app
      :dialog="createIncomeTypeDialog"
      :closeDialogMethod="closeDialogMethod"
    ></create-income-type-modal-app>      
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateIncomeTypeModal from './CreateIncomeTypeModal'

export default {
  components: {
    'create-income-type-modal-app': CreateIncomeTypeModal
  },    
  data () {
    return {
      loading: false,
      columns: ['id', 'description'],
      createIncomeTypeDialog: false
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
    openDialogMethod () {
      this.createIncomeTypeDialog = true
    },
    closeDialogMethod () {
      this.createIncomeTypeDialog = false 
    },
    goToEditIncomeTypeRoute (incomeTypeId) {
      this.$router.push(`income_types/${incomeTypeId}`)
    },    
    fetchIncomeTypes () {
      this.loading = true
      this.$store.dispatch('fetchIncomeTypes')
        .then(result => {
          console.log('result:', result)
          this.data = result
        })
        .catch(err => console.log(err))
        .finally(() => this.loading = false)
    },
    deleteIncomeType (incomeTypeId) {
      this.loading = true
      this.$store.dispatch('deleteIncomeType', incomeTypeId)
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