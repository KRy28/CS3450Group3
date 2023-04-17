<template>
    <div class="container">
      <h1>Rental Confirmation</h1>
      <div v-if="car" class="car-details">
        <h2>{{ car.make }} {{ car.model }}</h2>
        <img :src="car.image" alt="Car image" class="car-image" />
        <p>Year: {{ car.year }}</p>
        <p>Condition: {{ car.condition }}</p>
        <p>Description: {{ car.description }}</p>
        <p>Rate: ${{ car.rate }}/Day</p>
        <p>Reservation dates: {{ startDate }} - {{ endDate }}</p>
        <p>Total days: {{ totalDays }}</p>
        <p>Total price: ${{ totalPrice }}</p>
        <button class="checkout-button" @click="$router.push('/purchase-complete')">Checkout</button>

      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  export default {
    setup() {
      const route = useRoute();
      const carId = route.params.carId;
      const startDate = route.params.startDate;
      const endDate = route.params.endDate;
      const car = ref(null);
  
      const fetchCarDetails = async () => {
        const response = await fetch(`http://localhost:3000/cars/json`);
        const cars = await response.json();
        car.value = cars.find(c => c.id == carId);
      };
  
      onMounted(() => {
        fetchCarDetails();
      });
      
      
      const totalDays = computed(() => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = Math.abs(end.getTime() - start.getTime());
        return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      });
  
      const totalPrice = computed(() => {
        return car.value.rate * totalDays.value;
      });
  
      return {
        car,
        startDate,
        endDate,
        totalDays,
        totalPrice,
      };
    },
  };
  </script>
  
  <style>
  .container {
    font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .car-details {
    text-align: center;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background-color: #f8f8f8;
    margin-top: 20px;
  }
  
  .car-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  p {
    margin: 10px 0;
  }
  
  .checkout-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .checkout-button:hover {
    background-color: #0056b3;
  }
  </style>
  