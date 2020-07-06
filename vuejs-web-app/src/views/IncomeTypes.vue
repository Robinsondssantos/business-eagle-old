<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Income Types
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="goToCreateIncomeType"
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
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      columns: ['id', 'description']
    }
  },
  created () {
    this.fetchIncomeTypes()
  },
  computed: {
    ...mapGetters({
      incomeTypes: 'incomeTypes'
    })
  },
  methods: {
    goToCreateIncomeType () {
      this.$router.push('create_income_type')
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