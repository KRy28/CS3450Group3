<template>
  <main v-if="car">
    <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">
      <center>
        <h1>{{ car.make }} {{ car.model }}</h1>
        <img :src="car.image" style="height:400px">
        <p>Year: {{ car.year }}</p>
        <p>Condition: {{ car.condition }}</p>
        <p>Cost: ${{ car.rate.toLocaleString('en', {useGrouping:true}) }}/Day</p>
        <div class="description">
          <p>{{ car.description }}</p>
        </div>
        <RouterLink class="checkoutButton" :to="`/calendar`">Rent</RouterLink>
      </center>
    </div>
  </main>
  <div v-else> <!-- Add a loading message while car data is being fetched -->
    <p>Loading car details...</p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const car = ref(null);

    const fetchCar = async () => {
      const response = await fetch(
        'http://localhost:3000/cars/json'
        // `https://api.example.com/cars/${route.params.id}`
      );
      car.value = await response.json();
    };

    onMounted(() => {
      fetchCar();
    });

    const startDate = ref("");
    const endDate = ref("");

    const submitReservation = () => {
      store.dispatch("setSelectedCar", car.value);
      router.push({
        name: "RentalConfirmation",
        params: { carId: car.value.id, startDate: startDate.value, endDate: endDate.value },
      });
    };

    return {
      car,
      startDate,
      endDate,
      submitReservation,
    };
  },
};
</script>


<style>
  /* Style the description box */
  .description {
    border: 1px solid black;
    padding: 10px;
    margin-top: 10px;
    max-width: 800px;
  }
</style>
