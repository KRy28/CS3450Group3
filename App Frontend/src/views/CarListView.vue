<script>

export default {
  data() {
  	return {
      json: undefined
      
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

<template>
    <div class="Cart" style="font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif">
      {{ fetch_info() }}
        <center>
            <h1>List of Cars</h1>    
            <p style="display:none">{{ total = 0 }}</p>
            <li v-for="car in json" style="list-style-type: none;">
              <RouterLink class="navigateButton" :to="`/details/${car.id}`">
                <div v-if="(car.make == this.$route.params.make || this.$route.params.make == 'null') && (car.model == this.$route.params.model || this.$route.params.model == 'null') && (car.rate >= this.$route.params.minPrice || this.$route.params.minPrice == 'null') && 
                (car.rate <= this.$route.params.maxPrice || this.$route.params.maxPrice == 'null')" class="container">
                  <div class="image">
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
    .container {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 5px;
    }

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

    

  }
  </style>