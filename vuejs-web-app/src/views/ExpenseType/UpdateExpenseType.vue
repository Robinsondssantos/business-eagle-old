<template>
  <app-base-edit-dialog>
    <template v-slot:title-button>
      Edit
    </template>      
    <template v-slot:title>
      Edit expense type
    </template>
    <template v-slot:content>
      <form @submit.prevent="editExpenseType">
        <div 
          class="form-group"
        >
          <input
            v-model="expenseType.description"
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
            <div v-else>
              SAVE
            </div>
          </button>
        </div>                                                        
      </form>
    </template>
  </app-base-edit-dialog>
</template>

<script>

import BaseEditDialog from '@/components/Dialog/BaseEditDialog'

export default {
  components: {
    'app-base-edit-dialog': BaseEditDialog
  },
  props: {
    expenseType: {
      type: Object,
      required: true
    }
  },  
  data () {
    return {
      loading: false
    }
  },
  methods: {
    updateProvider () {
      this.loading = true
      this.$store.dispatch('updateExpenseType', {
        id: this.expenseType.id,
        description: this.expenseType.description
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>