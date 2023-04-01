<template>
  <main>
    <center>
      {{ fetch_info() }}
      <li v-for="car in json" style="list-style-type: none;">
        <h1 v-if="car.id == this.$route.params.id">{{ car.make }} {{ car.model }}</h1>
        <img v-if="car.id == this.$route.params.id" :src="car.image" style="height:400px">

        <p v-if="car.id == this.$route.params.id">Year: {{ car.year }}</p>
        <p v-if="car.id == this.$route.params.id">Condition: {{ car.condition }}</p>
        <p v-if="car.id == this.$route.params.id">Cost: ${{ car.rate.toLocaleString('en', {useGrouping:true}) }}/Day</p>
        <p v-if="car.id == this.$route.params.id">{{ car.description }}</p>
        <RouterLink v-if="car.id == this.$route.params.id" class="checkoutButton" :to="`/calendar`">Rent</RouterLink>

      </li>
    </center>
  </main>
</template>

<script>
export default {
  data() {
  	return {
      json: undefined,
      car: undefined
    }
	},

  methods: {
    fetch_info() {
            fetch("http://localhost:3000/cars/json")
                .then(r => r.json())
                .then(json => {
                    this.json = json
                    console.log(json)
                })
                .catch(error => {
                    console.log(error);
                })
        },
  }
  
}
</script>
