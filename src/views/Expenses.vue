<template>
  <div class="container">
    <div class="month-info">
      <span>Março</span>
    </div>    
    <div class="card">
      <span class="expense-label">Despesas</span>
      <span class="expense-value">R$ 500,00</span>
    </div>

    <div class="expense-item-header">
      <div class="expense-item-title">
        <span class="expense-item-title-label paid">Pagas</span>
        <span class="expense-item-title-value paid">R$ 50,00</span>
      </div>
      <div class="expense-item">
        <span class="expense-item-label">Bar do Zé</span>
        <span class="expense-item-value">R$ 50,00</span>
      </div>
      <span class="tag">#cerveja</span>      
    </div>       
  
    <div class="expense-item-header">
      <div class="expense-item-title">
        <span class="expense-item-title-label overdue">Atrasadas</span>
        <span class="expense-item-title-value overdue">R$ 50,00</span>
      </div>
      <div class="expense-item">
        <span class="expense-item-label">Droga Raia</span>
        <span class="expense-item-value">R$ 50,00</span>
      </div>
      <span class="tag">#farmacia</span>
    </div>

    <div class="expense-item-header">
      <div class="expense-item-title">
        <span class="expense-item-title-label">Hoje</span>
        <span class="expense-item-title-value">R$ 302,10</span>
      </div>
      <div class="expense-item">
        <span class="expense-item-label">Energia elétrica</span>
        <span class="expense-item-value">R$ 260,00</span>
      </div>
      <span class="tag">#copel</span>
      <div class="expense-item">
        <span class="expense-item-label">Água e saneamento</span>
        <span class="expense-item-value">R$ 42,10</span>
      </div>
      <span class="tag">#sanepar</span>
    </div>

    <div class="expense-item-header">
      <div class="expense-item-title">
        <span class="expense-item-title-label">Amanhã</span>
        <span class="expense-item-title-value">R$ 22,43</span>
      </div>
      <div class="expense-item">
        <span class="expense-item-label">Posto Tigrão</span>
        <span class="expense-item-value">R$ 22,43</span>
      </div>
      <span class="tag">#combustivel</span>
    </div>

    <div class="expense-item-header">
      <div class="expense-item-title">
        <span class="expense-item-title-label">Quinta</span>
        <span class="expense-item-title-value">R$ 10,00</span>
      </div>
      <div class="expense-item">
        <span class="expense-item-label">Mercado do Zé</span>
        <span class="expense-item-value">R$ 10,00</span>
      </div>
      <span class="tag">#mercado</span>
    </div>

    <div class="expense-item-header">
      <div class="expense-item-title">
        <span class="expense-item-title-label">Próximas</span>
        <span class="expense-item-title-value">R$ 65,47</span>
      </div>
      <div class="expense-item">
        <span class="expense-item-label">Supermercado Polo</span>
        <span class="expense-item-value">R$ 45,47</span>
      </div>
      <span class="tag">#mercado</span>
      <div class="expense-item">
        <span class="expense-item-label">Supermercado Patão</span>
        <span class="expense-item-value">R$ 20,00</span>
      </div>
      <span class="tag">#mercado</span>
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

  .expense-label {
    color: #777;
  }

  .expense-value {
    font-size: 32px;
    font-weight: 800;
    color: #ee4444;
    padding: 10px 0 0 0;
  }

  .expense-item-header {
    /* border-top: 1px solid #eee; */
    border-bottom: 1px solid #eee;
    padding: 20px 0 20px 0;
    margin-bottom: 20px;
  }

  .expense-item-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .expense-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* border-top: 1px solid #eee; */
    margin-top: 10px;
    /* margin-bottom: 20px; */
    cursor: pointer;
  }

  .expense-item-title-label {
    color: #444;
    font-weight: 600;
  }

  .expense-item-title-value {
    color: #444;
    font-weight: 600;
  }

  .expense-item-label {
    color: #777;
  }

  .expense-item-value {
    color: #777;
  }

  .overdue {
    color: #ff7777;
  }

  .accent {
    background: #eee;
  }

  .paid {
    color: #77cc77;
  }
  
  .paid-value {
    text-decoration: line-through;
  }

  .paid-label {
    text-decoration: line-through;
  }

</style>