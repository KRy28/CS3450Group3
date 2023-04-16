<!-- src/components/RentalConfirmation.vue -->

<template>
    <div class="rental-confirmation">
      <h1>Rental Confirmation</h1>
      <div class="rental-info">
        <div v-if="car">{{ car.make }} {{ car.model }}</div>
        <img :src="car.image" style="height: 200px">
        <p>Year: {{ car.year }}</p>
        <p>Condition: {{ car.condition }}</p>
        <p>Cost: ${{ car.rate }}/Day</p>
        <p>Start Date: {{ startDate }}</p>
        <p>End Date: {{ endDate }}</p>
        <p>Total Days: {{ totalDays }}</p>
        <p>Total Price: ${{ totalPrice }}</p>
      </div>
    </div>
  </template>
  
  
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();

    const car = computed(() => store.state.selectedCar);
    const startDate = computed(() => route.params.startDate);
    const endDate = computed(() => route.params.endDate);

    const totalDays = computed(() => {
      if (!startDate.value || !endDate.value) {
        return 0;
      }
      const start = new Date(startDate.value);
      const end = new Date(endDate.value);
      return (end - start) / (1000 * 60 * 60 * 24) + 1;
    });

    const totalPrice = computed(() => {
      if (!car.value || !totalDays.value) {
        return 0;
      }
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

  
  <style scoped>
  .rental-confirmation {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .rental-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>
  