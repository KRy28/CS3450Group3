<!-- src/components/PurchaseComplete.vue -->

<template>
    <div class="purchase-complete">
      <h1>Purchase Successful</h1>
      <p>Thank you for your reservation! We hope you enjoy your rental experience.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "PurchaseComplete",
  };
  </script>
  
  <style scoped>
  .purchase-complete {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  