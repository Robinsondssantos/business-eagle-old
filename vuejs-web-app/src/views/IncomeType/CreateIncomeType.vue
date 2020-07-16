<template>
  <app-base-create-dialog>
    <template v-slot:title-button>
      Add income type
    </template>    
    <template v-slot:title>
      Add income type
    </template>
    <template v-slot:content>
      <form @submit.prevent="createIncomeType">
        <div 
          class="form-group"
        >
          <input
            v-model="description"
            class="form-control"
            type="text"
            placeholder="Description"
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
            <div v-else>
              SAVE
            </div>
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
      description: '',
    }
  },
  methods: {
    createIncomeType () {
      this.loading = true
      this.$store.dispatch('createIncomeType', {
        description: this.description
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>