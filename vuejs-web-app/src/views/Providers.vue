<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Providers
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="goToAddProviderRoute"
        >
          Add Provider
        </button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data" :key="entry.id">
          <td v-for="key in columns" :key="key">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      columns: ['id', 'name'],
      data: [],
    }
  },
  created () {
    this.fetchProviders()
  },
  methods: {
    goToAddProviderRoute () {
      this.$router.push('create_provider')
    },
    fetchProviders () {
      this.loading = true
      this.$store.dispatch('fetchProviders')
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