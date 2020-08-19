<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-layout row justify-center>
      <v-flex xs12 sm9 md9 lg6 mt-12>
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <app-create-income></app-create-income>
          </v-card-title>
          <v-card-text>
            <v-data-table>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import CreateIncome from '@/views/Income/CreateIncome'

export default {
  components: {
    'app-create-income': CreateIncome
  },
  data () {
    return {}
  }
}
</script>
