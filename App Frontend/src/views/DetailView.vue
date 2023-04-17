<template>
  <DateRangePicker 
      :carId="carId"  
      @submit="handleReservation" />
  <main>
    <div style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">
      <center>
        
        <!-- Loop through each car in the json data and display its info -->
          <li v-for="car in json" style="list-style-type: none;" @click="carId = car.id">
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
          <!-- <RouterLink v-if="car.id == this.$route.params.id" class="checkoutButton" :to="`/calendar`">Rent</RouterLink> -->
          <RouterLink v-if="car.id == this.$route.params.id" class="checkoutButton" :to="`/calendar/${car.id}`">Rent</RouterLink>

        </li>
      </center>

    </div>
  </main>
</template>

<script>
export default {
  data() {
  return {
    json: undefined,
    car: undefined,
    carId: null
  }
},


  async created(){
    await this.fetch_info();
  },

  methods: {
    fetch_info() {
      // Fetch the car data from the JSON API
      return fetch("http://localhost:3000/cars/json")
        .then(r => r.json())
        .then(json => {
          // Set the json data to the component's data
          this.json = json
          console.log(json)
        })
        .catch(error => {
          console.log(error);
        })
    },
    handleReservation({ carId, startDate, endDate }) {
      console.log("handleReservation called in DetailView");
      this.$router.push(`/rental-confirmation/${carId}/${startDate}/${endDate}`);
    },
  }
}
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
