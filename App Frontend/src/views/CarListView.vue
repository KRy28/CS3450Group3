<script>
export default {
  data() {
  	return {
      json: undefined // initialize the 'json' property to undefined
    }
	},

  methods: {
    fetch_info() {
      fetch("http://localhost:3000/cars/json") // fetch data from the specified URL
        .then(r => r.json()) // parse the response as JSON
        .then(json => {
          this.json = json // set the 'json' property to the parsed JSON data
          console.log(json) // log the data to the console
        })
        .catch(error => {
          console.log(error); // log any errors to the console
        })
    },
    getColor(index) {
      const colors = [
        // "#F0F0F0", // Light gray
        "#D6EAF8", // Light blue
        "#FCF3CF"  // Light yellow
      ];
      return colors[index % colors.length];
    }
  }
};
</script>

<template>
    <div class="Cart" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">
      {{ fetch_info() }}
        <center>
            <h1>List of Cars</h1>    
            <p style="display:none">{{ total = 0 }}</p>
            <li v-for="(car, index) in json" style="list-style-type: none;">
              <RouterLink class="navigateButton" :to="`/details/${car.id}`">
                <div
                  v-if="(car.make.toLowerCase() == this.$route.params.make.toLowerCase() || this.$route.params.make == 'null') && (car.model.toLowerCase()
                 == this.$route.params.model.toLowerCase() || this.$route.params.model == 'null') && (car.rate >= this.$route.params.minPrice || this.$route.params.minPrice == 'null') && 
                (car.rate <= this.$route.params.maxPrice || this.$route.params.maxPrice == 'null')"
                  class="container"
                  :style="{ backgroundColor: getColor(index), padding: '15px', borderRadius: '10px', margin: '10px' }"
                >
                  <div class="image">
                    <img :src="car.image" style="height:100px">
                  </div>
                  <div class="text">
                    <p><strong>{{ car.make }} {{ car.model }}</strong></p>
                    <p>Cost: ${{ car.rate.toLocaleString('en', {useGrouping:true}) }}/Day</p>
                  </div>
                </div>
              </RouterLink>
            </li>
        </center>
    </div>
  
  </template>

  
  <style>
  @media (min-width: 1024px) {
    /* .container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 5px;
    } */

    .checkoutButton{
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
      margin: 100px;
    }
    .checkoutButton:hover {
      background-color: #0069d9; /* darken background color on hover */
    }

    .carButton{
      width:100%;
      border:none;
      appearance:none;
      cursor:default;
      background-color: inherit;
    }

    .carButton:hover{
      background-color: lightgray;
    }

    .navigateButton{
      cursor: pointer;
      text-decoration: none;
      color:black;
    }
    .navigateButton:hover{
        color: gray;

    }
    .container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    

  }
  </style>