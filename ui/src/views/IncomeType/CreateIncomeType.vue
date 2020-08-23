<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          color="primary"
          small
          depressed
          v-bind="attrs"
          v-on="on"
        >
          Adicionar
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Adicionar tipo de entrada</span>
        </v-card-title>

        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              label="Descrição"
              v-model="description"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            small
            class="mb-2"
            color="primary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            outlined
            small
            class="mb-2 mr-2"
            color="primary"
            @click="createIncomeType"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      loading: false,
      valid: false,
      description: ''
    }
  },
  methods: {
    async createIncomeType () {
      console.log('heheheh')
      try {
        this.loading = true
        await this.$store.dispatch('createIncomeType')
      } catch (err) {
        console.log(err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
