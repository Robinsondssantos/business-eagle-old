<template>
  <div class="text-center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          color="primary"
          small
          v-bind="attrs"
          v-on="on"
        >
          Adicionar
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Adicionar entrada</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Descrição"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Tipo"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            small
            color="primary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            outlined
            small
            color="primary"
            @click="dialog = false"
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
      dialog: false
    }
  }
}
</script>
