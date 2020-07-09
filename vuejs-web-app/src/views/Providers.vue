<template>
  <div class="container">
    <div class="panel-table">
      <div>
        Providers
      </div>
      <div>
        <button
          class="btn btn-secondary"
          @click="showModal"
        >
          Open modal!
        </button>        
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

          <create-update-provider-modal-app
            :dialog="dialog"
            :provider="provider"
            @close="closeDialogMethod"
          ></create-update-provider-modal-app>  

          <td v-for="key in columns" :key="key">
            {{ provider[key] }}
          </td>
          <td>
            <button
              class="btn"
              @click="openDialogMethod()"
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
    <modal-app
      v-show="isModalVisible"
      @close="closeModal"
    >
    </modal-app>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Modal from '@/components/Modal/Modal'
import CreateUpdateProviderModal from './CreateUpdateProviderModal'

export default {
  components: {
    'modal-app': Modal,
    'create-update-provider-modal-app': CreateUpdateProviderModal
  },
  data () {
    return {
      loading: false,
      columns: ['id', 'name'],
      dialog: false,
      isModalVisible: false
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
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    openDialogMethod () {
      this.dialog = true
    },
    closeDialogMethod () {
      this.dialog = false 
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