<template>
  <div class="container">
    <div class="income-card">
      <span class="income-label">Incomes</span>
      <span class="income-value">R$ 550,00</span>
    </div>
  </div>
</template>

<style scoped>

  .income-card {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    padding: 20px 0 20px 0;
  }

  .income-label {
    color: #777;
  }

  .income-value {
    font-size: 32px;
    font-weight: 800;
    color: #0000ff;
    padding: 10px 0 0 0;
  }

</style>