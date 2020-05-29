<template>
  <div class="container">
    <div class="panel-expense">
      <form @submit.prevent="addProviderCustomer">
        <div class="form-group">
          <input
            v-model="name"
            class="form-control"
            type="text"
            name="name"
            placeholder="Name"
            required
          >
        </div>
        <div class="form-group">
          <input
            v-model="type"
            class="form-control"
            type="text"
            name="type"
            placeholder="Type"
            required
          >
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary"
            type="submit"
          >Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      type: '',
    }
  },
  created () {
    console.log('created')
  }
}
</script>