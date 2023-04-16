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
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
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
  
      return {
        car,
        startDate,
        endDate,
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
  </style>
  