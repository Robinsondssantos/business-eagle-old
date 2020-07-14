<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Providers
      </div>
      <div>
        <app-create-provider-dialog>          
        </app-create-provider-dialog>
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
            <app-update-provider-dialog
              :provider="provider"
            ></app-update-provider-dialog>
          </td>          
          <td>
            <app-delete-provider-dialog
              :provider="provider"
            ></app-delete-provider-dialog>            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CreateProviderDialog from '@/views/Provider/CreateProviderDialog'
import UpdateProviderDialog from '@/views/Provider/UpdateProviderDialog'
import DeleteProviderDialog from '@/views/Provider/DeleteProviderDialog'

export default {
  components: {
    'app-create-provider-dialog': CreateProviderDialog,
    'app-update-provider-dialog': UpdateProviderDialog,
    'app-delete-provider-dialog': DeleteProviderDialog
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'name']
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