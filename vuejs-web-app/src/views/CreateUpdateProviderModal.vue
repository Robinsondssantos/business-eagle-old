<template>
  <div class="modal" v-if="dialog"> 
    <div class="modal-content">
      <span 
        class="close" 
        @click.prevent="close()"
      >&times;</span>
      <div class="form-group">
        Create/Update Provider
      </div>
      <form @submit.prevent="createUpdateProvider">
        <div
          class="form-group"
        >
          <input
            v-model="name"
            class="form-control"
            type="text"
            name="name"
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
    provider: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      loading: false,
      id: null,
      name: ''
    }
  },
  watch: {
    dialog (v) {
      console.log('dialog:', v)
      if (this.dialog) {
        if (this.provider) {
          this.id = this.provider.id
          this.name = this.provider.name
        } else {
          this.id = null
          this.name = ''
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    createUpdateProvider () {
      if (this.id) {
        this.updateProvider()
      } else {
        this.createProvider()
      }
    },
    createProvider () {
      this.loading = true
      this.$store.dispatch('createProvider', {
        name: this.name
      })
        .then(() => {})
        .catch(err => console.log(err))
        .finally(() => { this.loading = false })
    },
    updateProvider () {
      this.loading = true
      this.$store.dispatch('updateProvider', {
        id: this.id,
        name: this.name
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
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
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