<template>
  <!-- Car search container -->
  <div class="car-search">
    <!-- Title -->
    <h2>Search for Cars</h2>
    <!-- Search form -->
    <form @submit.prevent="searchCars">
      <!-- Make input field -->
      <div class="form-group">
        <label for="make">Make:</label>
        <input type="text" id="make" v-model="search.make" />
      </div>
      <!-- Model input field -->
      <div class="form-group">
        <label for="model">Model:</label>
        <input type="text" id="model" v-model="search.model" />
      </div>
      <!-- Min price slider -->
      <div class="form-group">
        <label for="min-price">Min Price:</label>
        <input type="range" id="min-price" v-model="search.minPrice" :max="search.maxPrice || 1000" min="0" step="1" />
        <span>$ {{ search.minPrice }}</span>
      </div>
      <!-- Max price slider -->
      <div class="form-group">
        <label for="max-price">Max Price:</label>
        <input type="range" id="max-price" v-model="search.maxPrice" :min="search.minPrice || 0" max="1000" step="1" :disabled="noMaxPrice" />
        <span>$ {{ search.maxPrice }}</span>
        <div class="checkbox-container">
          <input type="checkbox" id="no-max-price" v-model="noMaxPrice" @change="toggleMaxPrice" />
          <label for="no-max-price">No Max Price</label>
        </div>


      </div>
      <!-- Search button -->
      <center>
        <RouterLink
          class="checkoutButton"
          :to="`/list/${search.make}/${search.model}/${search.minPrice}/${search.maxPrice}`"
          >Search</RouterLink
        >
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
        noMaxPrice: false,
      },
    };
  },
  methods: {
    toggleMaxPrice() {
      if (this.noMaxPrice) {
        this.search.maxPrice = 1e9; // Very large value
      } else {
        this.search.maxPrice = this.search.minPrice;
      }
    },
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
  box-sizing: border-box;
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

.checkoutButton {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
}

.checkoutButton:hover {
  background-color: #0069d9; /* darken background color on hover */
}
</style>
