<template>
  <div class="container">
    <div class="painel-main">
      <div>
        <button
          class="btn btn-primary btn-main"
          @click="addExpense"
        >
          Add Expense
        </button>
      </div>
      <div>
        <button
          class="btn btn-primary btn-main"
          @click="logOff"
        >
          Logoff
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    addExpense () {
      console.log('add expense')
    },
    logOff () {
      this.$store.dispatch('logOff')
        .then(() => this.$router.push('/signin'))
    }
  }
}
</script>

<style scoped>
  .painel-main {
    display: flex;
  }

  .btn-main {
    margin: 10px;
    height: 40px;
    /* background: #004cb2; */
    font-weight: 600;
    color: #777;
    background: #ddd;
    border-radius: 5px;    
  }

</style>