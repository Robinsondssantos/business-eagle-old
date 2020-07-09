<template>
  <app-base-create-dialog>
    <template v-slot:title-button>
      Add provider
    </template>    
    <template v-slot:title>
      Add provider
    </template>
    <template v-slot:content>
      <form @submit.prevent="createProvider">
        <div
          class="form-group"
        >
          <input
            v-model="name"
            class="form-control"
            type="text"
            placeholder="Name"
            required
          >
        </div>
        <div
          class="form-group"
        >
          <button
            class="btn btn-secondary"
            type="submit"
          >
            <div v-if="loading" class="spinner"></div>
            <div v-else>SAVE</div>
          </button>
        </div>
      </form>
    </template>
  </app-base-create-dialog>
</template>

<script>

import BaseCreateDialog from '@/components/Dialog/BaseCreateDialog'

export default {
  components: {
    'app-base-create-dialog': BaseCreateDialog
  },
  data () {
    return {
      loading: false,
      name: ''
    }
  },
  methods: {
    createProvider () {
      this.loading = true
      this.$store.dispatch('createProvider', {
        name: this.name
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }  
}
</script>