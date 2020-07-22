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
          <span>Delete <strong>{{ provider.name }}</strong>?</span>
        </div>
        <div
          class="form-group"
        >
          <div class="group-actions">
            <dir>
              <button
                class="btn btn-cancel"
                type="button"
              >
                Cancel
              </button>
            </dir>
            <div class="action">
              <button
                class="btn btn-delete"
                type="submit"
              >
                <div v-if="loading" class="spinner"></div>
                <div v-else>Delete</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </template>
  </app-base-delete-dialog>
</template>

<script>

import BaseDeleteDialog from '@/components/Dialog/BaseDeleteDialog2'

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
      this.$store.dispatch('deleteProvider', this.provider.id)
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }  
}
</script>

<style scoped>

  form {
    padding: 0;
  }

  .action {
    margin-left: 10px;
  }

  .group-actions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }

  .btn-cancel {
    /* color: rgba(255, 255, 255, 0.90); */
    color: #0056ce;
    border: solid 1px #0056ce;
    background-color: #ffffff;
  }

  .btn-delete {
    color: rgba(255, 255, 255, 0.90);
    border: solid 1px #0056ce;
    background-color: #0056ce;
  }    

</style>