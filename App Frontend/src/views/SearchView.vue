<template>
    <div class="car-search">
      <h2>Search for Cars</h2>
      <form @submit.prevent="searchCars">
        <div class="form-group">
          <label for="make">Make:</label>
          <input type="text" id="make" v-model="search.make" />
        </div>
        <div class="form-group">
          <label for="model">Model:</label>
          <input type="text" id="model" v-model="search.model" />
        </div>
        <div class="form-group">
          <label for="min-price">Min Price:</label>
          <input type="number" id="min-price" v-model="search.minPrice" />
        </div>
        <div class="form-group">
          <label for="max-price">Max Price:</label>
          <input type="number" id="max-price" v-model="search.maxPrice" />
        </div>
        <center>
          <RouterLink class="checkoutButton" :to="`/list/${search.make}/${search.model}/${search.minPrice}/${search.maxPrice}`">Search</RouterLink>
        </center>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        search: {
          make: null,
          model: null,
          minPrice: null,
          maxPrice: null,
        },
      };
    },
    methods: {
      searchCars() {
        console.log("Search criteria:", this.search);
        // Perform the search and update the car list
      },
    },
  };
  </script>
  
  <style scoped>
  .car-search {
    background-color: #fff;
    border-radius: 5px;
    padding: 2rem;
    width: 100%;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-top: 0;
    color: #555;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  label {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  input {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    font-size: 1rem;
    color: #fff;
    background-color: #333;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #444;
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
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
      
    }
    .checkoutButton:hover {
      background-color: #0069d9; /* darken background color on hover */
    }

  </style>
  