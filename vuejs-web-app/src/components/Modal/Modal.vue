<template>
  <div class="modal"> 
    <div class="modal-content">
      <span 
        class="close" 
        @click.prevent="close()"
      >&times;</span>
      <div class="form-group">
        Create Expense Type
      </div>
      <slot name="body">
        body
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
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
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    border-radius: 8px;
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