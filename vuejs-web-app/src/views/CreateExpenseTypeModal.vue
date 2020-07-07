<template>
  <div class="modal" v-if="dialog"> 
    <div class="modal-content">
      <span 
        class="close" 
        @click.prevent="closeDialog()"
      >&times;</span>
      <div class="form-group">
        Create Expense Type
      </div>
      <form @submit.prevent="createExpenseType">
        <div
          class="form-group"
        >
          <input
            v-model="description"
            class="form-control"
            type="text"
            name="description"
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
    </div>
  </div>
</template>

<script>

export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    closeDialogMethod: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      description: '',
    }
  },
  methods: {
    closeDialog () {
      this.closeDialogMethod()
    },
    createExpenseType () {
      this.loading = true
      this.$store.dispatch('createExpenseType', {
        description: this.description
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    }
  }
}
</script>

<style scoped>

  .modal {
    /* display: block; */
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    border-radius: 4px;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
  }

  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

</style>