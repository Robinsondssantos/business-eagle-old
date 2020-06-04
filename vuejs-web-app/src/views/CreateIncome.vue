<template>
  <div class="container">
    <div class="panel-income">
      <div class="form-group">
        Income
      </div>
      <form @submit.prevent="createIncome">
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
          <input
            v-model="customer"
            class="form-control" 
            type="text"
            name="customer"
            placeholder="Customer"
            required
          >
        </div>
        <div
          class="form-group"
        >
          <select
            v-model="selectedType"
            class="form-control"
          >
            <option v-for="type in incomeTypes" value="type.id" :key="type.id">
              {{ type.description }}
            </option>
          </select>
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="dateToPay"
            class="form-control"
            type="text"
            name="dateToPay"
            placeholder="Date to pay"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="value"
            class="form-control"
            type="text"
            name="value"
            placeholder="Value"
            required
          >
        </div>
        <div 
          class="form-group"
        >
          <input
            v-model="status"
            class="form-control"
            type="text"
            name="status"
            placeholder="Status"
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
            SAVE
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      description: '',
      customer: '',
      selectedType: '',
      types: [],
      dateToPay: '',
      value: '',
      status: '',
    }
  },
  computed: {
    ...mapGetters({
      incomeTypes: 'incomeTypes'
    })
  },
  methods: {
    createIncome () {

    }
  }
}
</script>