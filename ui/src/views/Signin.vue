<template>
  <v-app>
    <v-container
      fluid
      class="blue darken-4 fill-height"
    >
      <v-layout row justify-center>
        <v-flex xs12 sm9 md6 lg4 mt-12>
          <v-card outlined>
            <v-card-title>
              <span class="headline">Login</span>
            </v-card-title>
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  label="E-mail"
                  v-model="email"
                ></v-text-field>
                <v-text-field
                  label="Senha"
                  v-model="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                outlined
                color="primary"
              >
                Entrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
// https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/layouts/layouts/demos/dark.vue
export default {
  data () {
    return {
      valid: false,
      email: '',
      password: ''
    }
  },
  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
