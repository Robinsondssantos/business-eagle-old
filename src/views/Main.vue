<template>
  <div class="container">
    <div class="balance-card">
      <span class="balance-label">Balance</span>
      <span class="balance-value">R$ 100,00</span>
    </div>
    <div class="income-card">
      <span class="income-label">Income</span>
      <span class="income-value">R$ 150,00</span>
    </div>
    <div class="expense-card">
      <span class="expense-label">Expense</span>
      <span class="expense-value">R$ 50,00</span>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

  .container {
    max-width: 760px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
  }

  @media only screen and (max-width: 600px) {
    .container {
      margin: 80px 20px;
    }
  }

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
  }

  .expense-label {
    color: #777;
  }

  .expense-value {
    color: #ff0000;
  }

</style>
