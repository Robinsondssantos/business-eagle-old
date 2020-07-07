<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Providers
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="openDialogMethod()"
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
          <th>
          </th>
          <th>
          </th>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="provider in providers" :key="provider.id">
          <td v-for="key in columns" :key="key">
            {{ provider[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="goToEditProviderRoute(provider.id)"
            >
              EDIT
            </button>
          </td>          
          <td>
            <button
              class="btn"
              @click="deleteProvider(provider.id)"
            >
              REMOVE
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <create-provider-modal-app
      :dialog="createProviderDialog"
      :closeDialogMethod="closeDialogMethod"
    ></create-provider-modal-app>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateProviderModal from './CreateProviderModal'

export default {
  components: {
    'create-provider-modal-app': CreateProviderModal
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'name'],
      createProviderDialog: false
    }
  },
  computed: {
    ...mapGetters({
      providers: 'providers'
    })
  },
  created () {
    this.fetchProviders()
  },
  methods: {
    openDialogMethod () {
      this.createProviderDialog = true
    },
    closeDialogMethod () {
      this.createProviderDialog = false 
    },
    goToEditProviderRoute (providerId) {
      this.$router.push(`providers/${providerId}`)
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
    },
    deleteProvider (providerId) {
      this.loading = true
      this.$store.dispatch('deleteProvider', providerId)
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