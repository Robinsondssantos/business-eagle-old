<template>
  <div class="container">
    <div class="month-info">
      <span>Março</span>
    </div>    
    <div class="card">
      <span class="income-label">Receitas</span>
      <span class="income-value">R$ 550,00</span>
    </div>

    <div class="income-item-header">
      <div class="income-item-title">
        <span class="income-item-title-label received">Recebidas</span>
        <span class="income-item-title-value received">R$ 550,00</span>
      </div>
      <div class="income-item">
        <span class="income-item-label">Emprego 1</span>
        <span class="income-item-value">R$ 300,00</span>
      </div>
      <span class="tag">#salário</span>
      <div class="income-item">
        <span class="income-item-label">Emprego 2</span>
        <span class="income-item-value">R$ 250,00</span>
      </div>
      <span class="tag">#salário</span>      
    </div>

  </div>
</template>

<style scoped>

  .tag {
    font-size: 12px;
    color: #111;
    font-style: italic;
  }

  .card {
    display: flex;
    flex-direction: column;
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

  .income-item-header {
    /* border-top: 1px solid #eee; */
    border-bottom: 1px solid #eee;
    padding: 20px 0 20px 0;
    margin-bottom: 20px;
  }

  .income-item-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .income-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border-top: 1px solid #eee; */
    margin-top: 10px;
    /* margin-bottom: 20px; */
    cursor: pointer;
  }

  .income-item-title-label {
    color: #444;
    font-weight: 600;
  }

  .income-item-title-value {
    color: #444;
    font-weight: 600;
  }  

  .income-item-title-label {
    color: #444;
    font-weight: 600;
  }

  .income-item-title-value {
    color: #444;
    font-weight: 600;
  }

  .received {
    color: #77cc77;
  }

</style>