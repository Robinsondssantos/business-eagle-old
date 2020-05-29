<template>
  <div class="container">
    <div class="panel-expense">
      <div class="form-group">
        Expense
      </div>
      <form @submit.prevent="createExpense">
        <div class="form-group">
          <input
            v-model="description"
            class="form-control"
            type="text"
            name="description"
            placeholder="Description"
            required
          >
        </div>
        <div class="form-group">
          <input
            v-model="provider"
            class="form-control"
            type="text"
            name="provider"
            placeholder="Provider"
            required
          >
        </div>
        <div class="form-group">
          <select 
            v-model="selectedType"
            class="form-control"
          >
            <option v-for="type in types" :value="type.value" :key="type.value">
              {{ type.text }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <input
            v-model="dateToPay"
            class="form-control"
            type="text"
            name="dateToPay"
            placeholder="Date to pay"
            required
          >
        </div>
        <div class="form-group">
          <input
            v-model="value"
            class="form-control"
            type="text"
            name="value"
            placeholder="Value"
            required
          >
        </div>
        <div class="form-group">
          <input
            v-model="status"
            class="form-control"
            type="text"
            name="status"
            placeholder="Status"
            required
          >
        </div>
        <div class="form-group">
          <button
            class="btn btn-primary"
            type="submit"
          >
            SAVE
          </button>
        </div>                                                        
      </form>
    </div>
  </div>
</template>

<script>

      // Expenses:
      // Provider
      // description
      // expense type

      // partial expense:
      // date to pay
      // paid date
      // value

      // partial payment:
      // date to pay
      // paid date
      // value

export default {
  data () {
    return {
      loading: false,
      description: '',
      provider: '',
      selectedType: '',
      types: [
        { text: 'Ford', value: 'ford' },
        { text: 'Porsche', value: 'porsche' },
      ],
      dateToPay: '',
      value: '',
      status: '',
    }
  },
  methods: {
    createExpense () {
      
    }
  }
}
</script>

