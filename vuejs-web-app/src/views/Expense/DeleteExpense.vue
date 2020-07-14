<template>
  <app-base-delete-dialog>
    <template v-slot:title-button>
      Delete
    </template>     
    <template v-slot:title>
      Delete expense
    </template>
    <template v-slot:content>
      <form @submit.prevent="removeExpense">
        <div
          class="form-group"
        >
          <span>Delete <strong>{{ expense.description }}</strong>?</span>
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
    expense: {
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
    removeExpense () {
      this.loading = true
      this.$store.dispatch('deleteExpense', this.expense.id)
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }  
}
</script>