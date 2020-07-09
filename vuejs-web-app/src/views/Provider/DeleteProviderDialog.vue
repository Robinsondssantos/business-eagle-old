<template>
  <app-base-delete-dialog>
    <template v-slot:title-button>
      Delete
    </template>     
    <template v-slot:title>
      Delete provider
    </template>
    <template v-slot:content>
      <form @submit.prevent="removeProvider">
        <div
          class="form-group"
        >
          <input
            v-model="provider.name"
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
            <div v-else>DELETE</div>
          </button>
        </div>
      </form>
    </template>
  </app-base-delete-dialog>
</template>

<script>

import BaseDeleteDialog from '@/components/Dialog/BaseDeleteDialog'

export default {
  components: {
    'app-base-delete-dialog': BaseDeleteDialog
  },
  props: {
    provider: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false,
    }
  },
  methods: {
    removeProvider () {
      this.loading = true
      this.$store.dispatch('removeProvider', {
        id: this.provider.id,
        name: this.provider.name
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }  
}
</script>