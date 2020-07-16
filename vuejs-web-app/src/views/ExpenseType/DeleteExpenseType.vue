<template>
  <app-base-delete-dialog>
    <template v-slot:title-button>
      Delete
    </template>     
    <template v-slot:title>
      Delete expense type
    </template>
    <template v-slot:content>
      <form @submit.prevent="removeExpenseType">
        <div
          class="form-group"
        >
          <span>Delete <strong>{{ expenseType.description }}</strong>?</span>
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
    expenseType: {
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
    removeExpenseType () {
      this.loading = true
      this.$store.dispatch('deleteExpenseType', this.expenseType.id)
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }  
}
</script>