<template>
  <div class="container">
    <div class="month-info">
      <span>&lt;</span>
      <span>Março</span>
      <span>&gt;</span>
    </div>    
    <div class="balance-card">
      <span class="balance-label">Saldo</span>
      <span class="balance-value">R$ 50,00</span>
    </div>
      <router-link
        :to="{ name: 'Incomes', params: { incomeId: 1 } }"
      >
      <div class="income-card">
        <span class="income-label">Receitas</span>
        <span class="income-value">R$ 550,00</span>
        <span>+</span>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'Expenses', params: {  expenseId: 1 } }"
    >
      <div class="expense-card">
        <span class="expense-label">Despesas</span>
        <span class="expense-value">R$ 500,00</span>
        <span>+</span>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

  .balance-card {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* align-items: center; */
    border-bottom: 1px solid #eee;
    padding: 20px 0 20px 0;
    /* font-size: 18px; */
  }

  .balance-label {
    color: #777;
  }

  .balance-value {
    font-size: 32px;
    font-weight: 800;
    color: #008800 ;
    padding: 10px 0 0 0;
  }

  .income-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 20px 0 20px 0;
    cursor: pointer;
  }

  .income-label {
    color: #777;
  }

  .income-value {
    color: #0000ff;
  }

  .expense-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 20px 0 20px 0;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .expense-label {
    color: #777;
  }

  .expense-value {
    color: #ff0000;
  } 

</style>
