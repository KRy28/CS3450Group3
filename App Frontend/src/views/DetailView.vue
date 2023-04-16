<template>
  <!-- <DateRangePicker :car-id="this.$route.params.id" @date-range-selected="onDateRangeSelected" /> -->
  <!-- <DateRangePicker :car-id="this.$route.params.id" @date-range-selected="onDateRangeSelected" /> -->
  <main>
    <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">
      <center>
        
        <!-- Loop through each car in the json data and display its info -->
        <li v-for="car in json" style="list-style-type: none;">
          <!-- Display the car's make and model if its id matches the id in the URL -->
          <h1 v-if="car.id == this.$route.params.id">{{ car.make }} {{ car.model }}</h1>
          
          <!-- Display the car's image if its id matches the id in the URL -->
          <img v-if="car.id == this.$route.params.id" :src="car.image" style="height:400px">
          
          <!-- Display the car's year if its id matches the id in the URL -->
          <p v-if="car.id == this.$route.params.id">Year: {{ car.year }}</p>
          
          <!-- Display the car's condition if its id matches the id in the URL -->
          <p v-if="car.id == this.$route.params.id">Condition: {{ car.condition }}</p>
          
          <!-- Display the car's daily rate if its id matches the id in the URL -->
          <p v-if="car.id == this.$route.params.id">Cost: ${{ car.rate.toLocaleString('en', {useGrouping:true}) }}/Day</p>
          
          <!-- Display the car's description if its id matches the id in the URL -->
          <div v-if="car.id == this.$route.params.id" class="description">
            <p>{{ car.description }}</p>
          </div>
          
          <!-- Display a link to the calendar page if the car's id matches the id in the URL -->
          <RouterLink v-if="car.id == this.$route.params.id" class="checkoutButton" :to="`/calendar`">Rent</RouterLink>
        </li>
      </center>

    </div>
  </main>
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
