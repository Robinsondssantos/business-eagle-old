<template>
  <div>
    <button
      @click="dialog = true"
    >
      <slot name="title-button">
        Title button
      </slot>
    </button>
    <div class="modal" v-if="dialog">
      <div class="modal-content">
        <div class="modal-content-title">
          <div class="title">
            <slot name="title">
              Title
            </slot>
          </div>
        </div>
        <slot name="content">
          Content
        </slot>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>

  .title {    
    font-weight: 600;
    margin-bottom: 16px;
  }

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
    max-width: 300px;
    display: flex;
    flex-direction: column;
  }

  .modal-content-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .btn-close {
    background-color: #d5d5d5;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .btn-close:hover,
  .btn-close:focus {
    background-color: #bbbbbb;
  }

</style>