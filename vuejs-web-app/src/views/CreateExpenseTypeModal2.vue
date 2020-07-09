<template>
  <app-modal
    v-show="dialog"
    @close="close"
  >
    <template v-slot:body>
      a bababa
    </template>
  </app-modal>
</template>

<script>

import Modal from '@/components/Modal/Modal'

export default {
  components: {
    'app-modal': Modal
  },
  data () {
    return {
      loading: false,
      dialog: false,
      description: '',
    }
  },
  methods: {
    close () {
      this.dialog = false
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