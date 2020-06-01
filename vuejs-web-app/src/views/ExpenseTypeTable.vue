<template>
  <div class="container">
  Expense Type Table
    <table>
      <thead>
        <tr>
          <th v-for="key in columns" :key="key">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data" :key="entry.id">
          <td v-for="key in columns" :key="key">
            {{ entry[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ['id', 'description'],
      data: [
        { id: 1, description: 'Energia Elétrica' },
        { id: 2, description: 'Celular' },
        { id: 3, description: 'Telefone fixo' },
        { id: 4, description: 'Água' },
      ],
    }
  }
}
</script>

<style scoped>
</style>